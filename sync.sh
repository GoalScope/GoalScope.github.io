#!/data/data/com.termux/files/usr/bin/bash
# Sync TXT predictions from internal storage into the website data folder
# Run daily after you save new txt files, or set as cron.
SRC="/storage/emulated/0/Predictions"
DST="$HOME/predictions-website/data/uploads"
mkdir -p "$DST"
if [ ! -d "$SRC" ]; then echo "No $SRC"; exit 1; fi
cp -v "$SRC"/*.txt "$DST"/ 2>/dev/null || echo "No txt files to copy"
# Also regenerate index from uploads if needed
echo "Synced $(ls -1 "$DST" 2>/dev/null | wc -l) files to $DST"
ls -lh "$SRC"/*.txt 2>/dev/null
