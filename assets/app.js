let LS_KEY='goalscope_predictions_override';

function loadPredictions(){
  const override = localStorage.getItem(LS_KEY);
  if(override){
    try{ return JSON.parse(override); }catch{}
  }
  return null;
}
function saveOverride(data){
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function formatDate(iso){
  try{ return new Date(iso).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});}catch{return iso}
}

// Parse uploaded TXT into accumulator object
function parseTxtToAcca(txt, filename){
  // try extract odds and legs
  const lines = txt.split('\n');
  let title = filename.replace(/\.txt$/,'').replace(/_/g,' ');
  let odds = null;
  let legs = [];
  // find odds pattern like 125.45 or TOTAL ODDS
  const oddsMatch = txt.match(/(?:TOTAL\s*ODDS|ODDS:?)\s*[:=]?\s*(\d+\.\d+)/i) || txt.match(/(\d+\.\d+)\s*odds/i);
  if(oddsMatch) odds = oddsMatch[1];
  // find picks: lines with Pick: or @
  const pickRegex = /Pick:\s*(.+?)\s*@\s*(\d+\.\d+)/i;
  for(let i=0;i<lines.length;i++){
    const m = lines[i].match(pickRegex);
    if(m){
      // previous line likely contains match name
      let matchLine = (lines[i-1]||'').trim();
      if(!matchLine || matchLine.startsWith('Pick') || matchLine.startsWith('---')) matchLine = lines[i-2]||'Unknown Match';
      matchLine = matchLine.replace(/^\d+\.\s*/,'').replace(/^\-+\s*/,'').trim();
      const reasonLine = lines[i+1]||'';
      const reason = reasonLine.includes('Reason') ? reasonLine.replace(/.*Reason:\s*/i,'').trim() : '';
      legs.push([matchLine, m[1].trim(), m[2].trim(), reason.slice(0,160)]);
    }
  }
  // alternative parse for "Pick:" without odds on same line
  if(legs.length===0){
    for(let i=0;i<lines.length;i++){
      if(lines[i].toLowerCase().includes('pick:')){
        legs.push([lines[Math.max(0,i-1)].trim(), lines[i].replace(/.*Pick:\s*/i,'').trim(), '1.85', '']);
      }
    }
  }
  return {
    id: 'uploaded-'+Date.now(),
    date: new Date().toISOString().slice(0,10),
    title: title.slice(0,60),
    badge: 'UPLOADED · '+(legs.length||'?')+' FOLD',
    odds: odds || (legs.length? (Math.pow(1.85, legs.length).toFixed(2)) : '—'),
    legs: legs.length,
    summary: legs.slice(0,2).map(l=>l[1]).join(' · ').slice(0,90) || 'Uploaded accumulator',
    tags: ['Uploaded'],
    raw: txt.slice(0,6000),
    _legsDetailed: legs
  };
}
