<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Afbeelding converteren — Villa Wildebras</title>
  <style>
  :root {
    /* Basiskleuren AFAS-achtig */
    --color-accent: #0078d4;        /* bijvoorbeeld blauw als accentkleur */
    --color-accent-hover: #005a9e;
    --color-gray-dark: #333;
    --color-gray-medium: #666;
    --color-gray-light: #ddd;
    --color-background: #f9f9f9;
    --border-radius: 8px;
    --btn-padding: 12px 20px;
    --transition: 0.2s ease-in-out;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  body {
    background-color: var(--color-background);
    padding: 30px;
    max-width: 1000px;
    margin: 0 auto;
    color: var(--color-gray-dark);
    line-height: 1.5;
  }

  h1, h2 {
    color: var(--color-gray-dark);
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  p, .lead, label {
    color: var(--color-gray-medium);
  }

  .card {
    background: #ffffff;
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    padding: 24px;
    margin-top: 24px;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.05);
  }

  .drop {
    border: 2px dashed var(--color-gray-light);
    border-radius: var(--border-radius);
    padding: 40px;
    text-align: center;
    cursor: pointer;
    background-color: #ffffff;
    transition: background-color var(--transition), border-color var(--transition);
  }

  .drop.dragover {
    border-color: var(--color-accent);
    background-color: #eef6ff;
  }

  input[type="file"], input[type="number"], input[type="text"], select, input[type="color"] {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    padding: 8px;
    font-size: 1rem;
    transition: border-color var(--transition);
  }

  input:focus, select:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(0,120,212,0.2);
  }

  button {
    background-color: var(--color-accent);
    color: #fff;
    border: none;
    border-radius: var(--border-radius);
    padding: var(--btn-padding);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color var(--transition), transform var(--transition);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  button:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-1px);
  }

  .controls, .actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .preview {
    max-width: 100%;
    border-radius: var(--border-radius);
    margin-top: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .meta {
    margin-top: 12px;
    font-size: 0.9rem;
    color: var(--color-gray-medium);
  }

  footer {
    margin-top: 32px;
    font-size: 0.85rem;
    color: var(--color-gray-medium);
    text-align: center;
  }

  @media (max-width: 600px) {
    .controls, .actions {
      flex-direction: column;
    }
  }
</style>

</head>
<body>
  <h1>Afbeelding converteren naar exact formaat</h1>
  <p class="lead">Upload een afbeelding en download direct een versie in het juiste formaat (bijv. 305×100 px). Werkt in de browser — geen server nodig.</p>

  <div class="card">
    <div id="drop" class="drop">
      <div style="font-weight:600">Klik of sleep hier je afbeelding</div>
      <div class="small">Ondersteunde bestandsformaten: JPG, PNG, WebP. Max 12 MB (browserbeperking).</div>
      <input id="fileInput" type="file" accept="image/*" style="display:none" />
    </div>

    <div class="controls">
      <label>Breedte (px)<br><input id="width" type="number" value="305" min="1"></label>
      <label>Hoogte (px)<br><input id="height" type="number" value="100" min="1"></label>

      <label>Modus<br>
        <select id="mode">
          <option value="fit">Fit (behoud aspect, geen bijsnijden)</option>
          <option value="fill">Fill (vul, kan bijsnijden)</option>
          <option value="stretch">Stretch (rekt naar exact formaat)</option>
        </select>
      </label>

      <label>Output formaat<br>
        <select id="outFormat">
          <option value="image/png">PNG</option>
          <option value="image/jpeg">JPEG</option>
          <option value="image/webp">WebP</option>
        </select>
      </label>

      <label style="align-self:end"><input id="qualityToggle" type="checkbox"> Met compressie-instellingen (JPEG/WebP)</label>
      <label style="align-self:end"><input id="bgWhite" type="checkbox"> Achtergrond wit (voor PNG met transparantie)</label>
    </div>

    <div class="actions">
      <button id="convertBtn" disabled>Converteren & downloaden</button>
      <button id="previewBtn" disabled>Preview</button>
      <a id="downloadLink" style="display:none"></a>
    </div>

    <div id="previewArea"></div>
    <div id="meta" class="meta"></div>
  </div>

  
  <!-- TWEEDE CONVERTER: tweekleurige banner -->
  <section class="card" style="margin-top:18px">
    <h2 style="margin:0 0 8px 0">Tweede converter — tweekleurige banner (2480×175 px)</h2>
    <p class="small" style="margin:0 0 12px 0">Maak een afbeelding van precies <strong>2480×175 px</strong> met twee kleurvlakken onderaan: een onderste balk van <strong>25 px</strong> (kleur 1), daarboven een balk (kleur 2) en de rest wit. Kies beide kleuren via kleurcodes.</p>

    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:end">
      <label style="display:flex;flex-direction:column;align-items:flex-start">Kleur 1 (onderste balk, 25px)<br>
        <input id="color1" type="color" value="#59656b" style="height:36px;width:76px;padding:4px;border-radius:6px;border:1px solid #ccc">
        <input id="color1hex" type="text" value="#59656b" style="margin-top:6px;padding:6px;border-radius:6px;border:1px solid #ddd;width:120px">
      </label>

      <label style="display:flex;flex-direction:column;align-items:flex-start">Kleur 2 (bovenste balk)<br>
        <input id="color2" type="color" value="#cf5c65" style="height:36px;width:76px;padding:4px;border-radius:6px;border:1px solid #ccc">
        <input id="color2hex" type="text" value="#cf5c65" style="margin-top:6px;padding:6px;border-radius:6px;border:1px solid #ddd;width:120px">
      </label>

      <label style="display:flex;flex-direction:column;align-items:flex-start">Hoogte bovenste balk (px)<br>
        <input id="stripeHeight" type="number" value="25" min="0" max="175" style="width:110px;padding:8px;border-radius:8px;border:1px solid #ccc">
      </label>

      <div style="display:flex;gap:8px;align-items:center">
        <button id="genBanner">Genereer & download</button>
        <button id="previewBanner">Preview</button>
      </div>
    </div>

    <div id="bannerPreview" style="margin-top:12px"></div>
    <div id="bannerMeta" class="meta"></div>
  </section>

  <footer>
    Tip: plaats dit bestand in de /public map van je Vercel/Next.js repo (bijvoorbeeld public/convert.html) en link ernaar vanaf je site.
  </footer>

<script>
(function(){
  const drop = document.getElementById('drop');
  const fileInput = document.getElementById('fileInput');
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const modeSelect = document.getElementById('mode');
  const outFormat = document.getElementById('outFormat');
  const convertBtn = document.getElementById('convertBtn');
  const previewBtn = document.getElementById('previewBtn');
  const previewArea = document.getElementById('previewArea');
  const meta = document.getElementById('meta');
  const downloadLink = document.getElementById('downloadLink');
  const qualityToggle = document.getElementById('qualityToggle');
  const bgWhite = document.getElementById('bgWhite');

  let currentFile = null;
  let currentImage = null;

  function setMeta(text){ meta.textContent = text; }

  function onFile(file){
    if(!file) return;
    if(!file.type.startsWith('image/')) { alert('Geen afbeelding. Kies een image bestand.'); return; }
    currentFile = file;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = ()=>{
      currentImage = img;
      previewArea.innerHTML = '';
      img.className = 'preview';
      previewArea.appendChild(img);
      setMeta(`Origineel: ${img.width}×${img.height} px — ${Math.round(file.size/1024)} KB — ${file.type}`);
      convertBtn.disabled = false;
      previewBtn.disabled = false;
    };
    img.src = url;
  }

  drop.addEventListener('click',()=>fileInput.click());
  fileInput.addEventListener('change',(e)=>onFile(e.target.files && e.target.files[0]));

  drop.addEventListener('dragover',(e)=>{ e.preventDefault(); drop.classList.add('dragover'); });
  drop.addEventListener('dragleave',()=>drop.classList.remove('dragover'));
  drop.addEventListener('drop',(e)=>{ e.preventDefault(); drop.classList.remove('dragover'); const f = e.dataTransfer.files && e.dataTransfer.files[0]; onFile(f); });

  function createCanvasForResult(w,h){
    const c = document.createElement('canvas');
    c.width = w; c.height = h; return c;
  }

  function convertImage(){
    if(!currentImage) return;
    const W = Math.max(1, parseInt(widthInput.value,10)||1);
    const H = Math.max(1, parseInt(heightInput.value,10)||1);
    const mode = modeSelect.value;
    const out = outFormat.value;
    const quality = (qualityToggle.checked && (out==='image/jpeg' || out==='image/webp')) ? 0.85 : undefined;

    const srcW = currentImage.naturalWidth; const srcH = currentImage.naturalHeight;
    let sx=0, sy=0, sWidth=srcW, sHeight=srcH; // source rect
    if(mode==='fill'){
      // crop center to match aspect
      const srcRatio = srcW/srcH; const outRatio = W/H;
      if(srcRatio>outRatio){ // source wider -> crop width
        sHeight = srcH; sWidth = Math.round(outRatio * sHeight);
        sx = Math.round((srcW - sWidth)/2);
        sy = 0;
      } else {
        sWidth = srcW; sHeight = Math.round(sWidth / outRatio);
        sx = 0; sy = Math.round((srcH - sHeight)/2);
      }
    } else if(mode==='fit'){
      // no crop, we will fit inside and pad transparent/white
      const canvas = createCanvasForResult(W,H);
      const ctx = canvas.getContext('2d');
      if(bgWhite.checked){ ctx.fillStyle = '#fff'; ctx.fillRect(0,0,W,H); }
      // calculate fitted size
      const ratio = Math.min(W/srcW, H/srcH);
      const dw = Math.round(srcW * ratio); const dh = Math.round(srcH * ratio);
      const dx = Math.round((W - dw)/2); const dy = Math.round((H - dh)/2);
      ctx.drawImage(currentImage, 0,0,srcW,srcH, dx,dy, dw,dh);
      return {canvas, out, quality};
    } else if(mode==='stretch'){
      // draw stretched
      const canvas = createCanvasForResult(W,H);
      const ctx = canvas.getContext('2d');
      if(bgWhite.checked){ ctx.fillStyle = '#fff'; ctx.fillRect(0,0,W,H); }
      ctx.drawImage(currentImage, 0,0,srcW,srcH, 0,0,W,H);
      return {canvas, out, quality};
    }

    // for fill (cropping) or default crop
    const canvas = createCanvasForResult(W,H);
    const ctx = canvas.getContext('2d');
    if(bgWhite.checked){ ctx.fillStyle = '#fff'; ctx.fillRect(0,0,W,H); }
    ctx.drawImage(currentImage, sx,sy,sWidth,sHeight, 0,0,W,H);
    return {canvas, out, quality};
  }

  function triggerDownload(blob, filename){
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();
    setTimeout(()=>URL.revokeObjectURL(url), 60000);
  }

  convertBtn.addEventListener('click', async ()=>{
    const res = convertImage();
    if(!res) return;
    const ext = outFormat.value.split('/')[1].replace('jpeg','jpg');
    const filenameBase = (currentFile && currentFile.name) ? currentFile.name.replace(/\.[^.]+$/, '') : 'image';
    const finalName = `${filenameBase}-${widthInput.value}x${heightInput.value}.${ext}`;
    res.canvas.toBlob((blob)=>{ if(!blob) return alert('Kon niet converteren.'); triggerDownload(blob, finalName); }, res.out, res.quality);
  });

  previewBtn.addEventListener('click', ()=>{
    const res = convertImage();
    if(!res) return;
    const dataUrl = res.canvas.toDataURL(res.out, res.quality);
    previewArea.innerHTML = '';
    const img = new Image(); img.className='preview'; img.src = dataUrl; previewArea.appendChild(img);
    setMeta(`Preview: ${widthInput.value}×${heightInput.value} px — format ${outFormat.value}`);
  });

  // quick keyboard: enter triggers convert
  document.addEventListener('keydown',(e)=>{ if(e.key==='Enter' && (document.activeElement===widthInput || document.activeElement===heightInput)) { e.preventDefault(); if(!convertBtn.disabled) convertBtn.click(); }});

})();
</script>
</body>
</html>
