/* Hidromiel v3 — local, offline, sin dependencias */
const KEY='hidromiel_v3_lotes', DB='hidromiel-v3-media', STORE='photos';
const views=['inicio','tutorial','recetas','consejos','lotes'];
const TYPES=['Todos','Tradicional','Melomel','Metheglin','Bochet','Cyser','Pyment'];

const RECIPES=[
{id:'trad-seco',cat:'Tradicional',name:'Tradicional seco',desc:'Una base limpia para aprender a leer la fermentación.',difficulty:'Fácil',abv:'10–12%',honey:1.5,water:5,yeast:'Levadura de vino o hidromiel adecuada al perfil elegido',og:'1.075–1.095',
steps:['Sanitiza todo el material que vaya a tocar el mosto.','Mezcla la miel con agua y homogeniza. Registra volumen, temperatura y OG.','Enfría a la temperatura recomendada por la levadura.','Inocula levadura rehidratada siguiendo la ficha del fabricante.','Gestiona nutrientes según un protocolo contrastado y observa la evolución de SG.','Cuando la densidad sea estable, trasiega si hace falta y deja clarificar.','Embotella solo cuando el lote sea estable y el método de carbonatación esté controlado.']},
{id:'trad-semi',cat:'Tradicional',name:'Tradicional semidulce',desc:'Base equilibrada para conservar algo de dulzor residual.',difficulty:'Fácil',abv:'10–13%',honey:1.7,water:5,yeast:'Cepas con buena tolerancia y perfil limpio',og:'1.080–1.100',steps:['Sanitiza y prepara el equipo.','Mezcla y registra OG.','Inocula con temperatura adecuada.','Sigue la fermentación con SG, no solo con burbujeo.','Registra temperatura y cambios de aroma.','Clarifica cuando la fermentación haya terminado.','Si buscas dulzor residual, estabiliza y endulza solo con un método seguro y controlado antes de embotellar.']},
{id:'melomel-rojo',cat:'Melomel',name:'Melomel de frutos rojos',desc:'Fruta, acidez y color sobre una base de hidromiel.',difficulty:'Media',abv:'10–13%',honey:1.5,water:5,yeast:'Cepas apropiadas para fruta',og:'1.075–1.095',steps:['Prepara la base y registra OG.','Fermenta la base siguiendo la evolución de SG.','Añade fruta preparada y sanitariamente segura en el momento definido por la receta.','Controla aroma, extracción y densidad.','Retira la fruta cuando el perfil sea el buscado.','Deja clarificar y registra SG final.','Embotella solo con estabilidad confirmada.']},
{id:'melomel-mango',cat:'Melomel',name:'Melomel de mango',desc:'Tropical, aromático y fácil de personalizar.',difficulty:'Media',abv:'10–13%',honey:1.5,water:5,yeast:'Cepas de perfil frutal',og:'1.075–1.095',steps:['Sanitiza y prepara mango maduro en buenas condiciones.','Haz la base y registra OG.','Inocula y controla temperatura.','Incorpora el mango según el diseño de la receta.','Registra SG y observa la extracción de fruta.','Retira sólidos y clarifica.','Comprueba estabilidad antes de embotellar.']},
{id:'metheglin',cat:'Metheglin',name:'Metheglin especiado',desc:'Canela, vainilla, cítricos y otras especias con control.',difficulty:'Media',abv:'10–13%',honey:1.5,water:5,yeast:'Cepas limpias según objetivo',og:'1.075–1.095',steps:['Prepara una base neutra.','Registra OG y temperatura.','Fermenta y controla SG.','Añade especias en pequeñas cantidades y registra fecha.','Prueba periódicamente: la extracción continúa con el tiempo.','Retira las especias cuando el perfil esté equilibrado.','Clarifica, comprueba estabilidad y embotella.']},
{id:'bochet',cat:'Bochet',name:'Bochet de miel caramelizada',desc:'Miel calentada para desarrollar notas tostadas y de caramelo.',difficulty:'Media',abv:'10–14%',honey:1.8,water:5,yeast:'Cepas tolerantes al perfil buscado',og:'1.080–1.105',steps:['Calienta la miel con control y sin dejarla desatendida; el proceso requiere especial cuidado.','Enfría y mezcla con agua hasta obtener un mosto homogéneo.','Registra OG y temperatura.','Inocula cuando corresponda.','Sigue SG y temperatura.','Clarifica y deja integrar los aromas tostados.','Embotella solo con estabilidad confirmada.']},
{id:'cyser',cat:'Cyser',name:'Cyser de manzana',desc:'Miel y manzana en una combinación clásica.',difficulty:'Media',abv:'9–13%',honey:1.4,water:3.5,yeast:'Cepas de perfil frutal',og:'1.075–1.100',steps:['Selecciona mosto/zumo de manzana adecuado.','Añade miel y homogeniza.','Registra OG, temperatura y volumen.','Inocula y controla la fermentación.','Registra SG periódicamente.','Clarifica y deja integrar fruta y miel.','Comprueba estabilidad antes de embotellar.']},
{id:'pyment',cat:'Pyment',name:'Pyment de uva',desc:'Miel y uva con estructura y fruta.',difficulty:'Media',abv:'10–14%',honey:1.4,water:2.5,yeast:'Cepas apropiadas para vino/fruta',og:'1.080–1.105',steps:['Prepara mosto de uva en condiciones sanitarias adecuadas.','Añade miel y mezcla completamente.','Registra OG.','Inocula y controla temperatura.','Sigue SG y evolución aromática.','Clarifica y registra SG final.','Embotella con estabilidad confirmada.']},
{id:'canaria',cat:'Melomel',name:'Canaria · miel y cítricos',desc:'Interpretación canaria con naranja o mandarina y una base de miel.',difficulty:'Media',abv:'9–12%',honey:1.5,water:5,yeast:'Cepas de perfil limpio',og:'1.075–1.095',steps:['Prepara una base de miel y agua y registra OG.','Fermenta de forma controlada.','Añade piel/zumo o fruta según el diseño, evitando la parte blanca amarga de la piel.','Registra SG y aroma.','Retira el cítrico cuando la extracción sea suficiente.','Clarifica y deja integrar.','Comprueba estabilidad y embotella.']}
];

const TUTORIAL=[
['01','Higiene','Limpia primero y sanitiza después. Todo lo que toque el mosto o hidromiel después de enfriar debe estar correctamente preparado.'],
['02','La miel','La miel aporta los azúcares, pero su composición varía. Pesa y registra la cantidad, origen y variedad cuando la conozcas.'],
['03','OG','La densidad inicial sirve como referencia. Mídela con el instrumento adecuado y anota también la temperatura.'],
['04','Levadura','La cepa, temperatura, nutrientes y concentración inicial influyen mucho. Sigue siempre la ficha del fabricante para la rehidratación y uso.'],
['05','Fermentación','No juzgues el final solo por las burbujas. Una SG estable en mediciones separadas es una referencia mucho más útil.'],
['06','Trasiego','No trasiegues por calendario sin motivo. Cada manipulación puede introducir oxígeno o contaminación.'],
['07','Clarificación','Tiempo, frío u otros métodos pueden ayudar, pero elige una estrategia y observa el resultado antes de mezclar varias.'],
['08','Embotellado','Antes de embotellar confirma que la fermentación ha terminado o que tienes un método seguro para estabilización/carbonatación.'],
['09','Cata','Registra aroma, dulzor, acidez, alcohol, cuerpo, final y valoración. Tus notas son el mejor aprendizaje para el siguiente lote.']
];

const TIPS=[
['La fermentación se ha parado','Comprueba primero SG, temperatura y medición. Después revisa nutrientes, salud de la levadura y concentración inicial. Evita añadir cosas a ciegas.'],
['Huele a azufre','Puede aparecer con estrés de la levadura. Revisa temperatura y nutrición; si el problema persiste, documenta el lote antes de intervenir.'],
['Hay mucha espuma','Puede ser normal según volumen, recipiente y actividad. Deja espacio libre y usa un sistema de cierre adecuado.'],
['Está demasiado dulce','Mide SG antes de decidir. Dulzor no significa necesariamente fermentación parada: puede ser una decisión de receta o una levadura que ha alcanzado su límite.'],
['Quiero más aroma a fruta','Registra variedad, cantidad, momento de adición y tiempo de contacto. Cambia una variable por lote para saber qué funciona.'],
['Quiero menos alcohol','Diseña el lote desde la OG y la cepa. No intentes corregir un ABV elevado únicamente al final.'],
['Oxidación','Minimiza salpicaduras y espacio de cabeza innecesario después de la fermentación. Trasiegos suaves y material preparado ayudan.'],
['No está cristalino','La turbidez no significa automáticamente que esté mal. Dale tiempo y usa un método de clarificación apropiado si realmente lo necesitas.'],
['Truco del cuaderno','Fotografía siempre lo mismo: color, sedimento, superficie y etiqueta del lote. Comparar imágenes entre fechas aporta mucha información.'],
['Regla experimental','Cambia una variable cada vez. Si cambias miel, levadura, fruta y temperatura a la vez, no sabrás qué produjo la diferencia.']
];

function $(s){return document.querySelector(s)}
function esc(v){const d=document.createElement('div');d.textContent=v??'';return d.innerHTML}
function load(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return[]}}
function save(a){localStorage.setItem(KEY,JSON.stringify(a))}
function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(16).slice(2)}
function dateFmt(x){if(!x)return'—';const p=x.split('-');return p.length===3?`${p[2]}/${p[1]}/${p[0]}`:x}
function num(v){const n=parseFloat(String(v).replace(',','.'));return Number.isFinite(n)?n:null}
function abv(og,sg){og=num(og);sg=num(sg);if(og===null||sg===null||og<=sg)return null;return Math.round((og-sg)*131.25*10)/10}
function validDensity(v){const n=num(v);return n!==null&&n>=0.900&&n<=1.200}
function go(v){location.hash='#'+v}
function route(){let v=(location.hash||'#inicio').slice(1);if(!views.includes(v))v='inicio';document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id==='view-'+v));document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.go===v));window.scrollTo(0,0)}

document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
window.addEventListener('hashchange',route);

function renderTutorial(){$('#tutorial-list').innerHTML=TUTORIAL.map(x=>`<article class="card" style="margin-bottom:10px"><span class="tag">${x[0]}</span><h2>${esc(x[1])}</h2><p class="muted">${esc(x[2])}</p></article>`).join('')}

let recipeFilter='Todos';
function renderRecipeFilters(){$('#recipe-filters').innerHTML=TYPES.map(x=>`<button class="chip ${x===recipeFilter?'active':''}" data-filter="${x}">${x}</button>`).join('');document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{recipeFilter=b.dataset.filter;renderRecipeFilters();renderRecipes()}))}
function renderRecipes(){const rs=recipeFilter==='Todos'?RECIPES:RECIPES.filter(r=>r.cat===recipeFilter);$('#recipes-list').innerHTML=rs.map(r=>`<article class="card recipe" style="margin-bottom:10px"><div class="top"><div><span class="tag">${esc(r.cat)}</span><h3>${esc(r.name)}</h3><p class="muted">${esc(r.desc)}</p></div><div class="meta"><span class="pill">${esc(r.difficulty)}</span><span class="pill">${esc(r.abv)}</span></div></div><div class="meta"><span class="pill">Miel: ${r.honey} kg</span><span class="pill">Agua/base: ${r.water} L</span><span class="pill">OG: ${r.og}</span></div><p><b>Levadura:</b> ${esc(r.yeast)}</p><details><summary>Ver proceso</summary><ol>${r.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></details><div class="btn-row" style="margin-top:11px"><button class="btn sm" data-recipe="${r.id}">Crear lote</button></div></article>`).join('');document.querySelectorAll('[data-recipe]').forEach(b=>b.addEventListener('click',()=>createFromRecipe(b.dataset.recipe)))}

function renderTips(){$('#tips-list').innerHTML=TIPS.map((x,i)=>`<article class="card tip ${i===3?'warning':''}"><h3>${esc(x[0])}</h3><p class="muted">${esc(x[1])}</p></article>`).join('')}

function createFromRecipe(id){const r=RECIPES.find(x=>x.id===id);if(!r)return;openLotForm({name:r.name,cat:r.cat,recipeId:r.id,honey:r.honey,water:r.water,yeast:r.yeast,og:'',sg:'',status:'Fermentando',notes:''});go('lotes')}

function lotForm(l){
const x=l||{id:'',name:'',date:new Date().toISOString().slice(0,10),cat:'Tradicional',recipeId:'',honey:'',water:'',yeast:'',og:'',sg:'',temp:'',ph:'',status:'Fermentando',notes:''};
$('#lot-form').hidden=false;$('#lot-form').innerHTML=`<div class="form">
<div class="lot-head"><h2>${x.id?'Editar lote':'Nuevo lote'}</h2><button type="button" class="btn sm ghost" id="cancel-form">Cerrar</button></div>
<div class="row"><label>Nombre<input id="f-name" value="${esc(x.name)}" maxlength="80" required></label><label>Fecha<input id="f-date" type="date" value="${esc(x.date)}" required></label></div>
<div class="row"><label>Tipo<select id="f-cat">${['Tradicional','Melomel','Metheglin','Bochet','Cyser','Pyment'].map(v=>`<option ${v===x.cat?'selected':''}>${v}</option>`).join('')}</select></label><label>Estado<select id="f-status">${['Preparación','Fermentando','Clarificando','Madurando','Listo','Pausado'].map(v=>`<option ${v===x.status?'selected':''}>${v}</option>`).join('')}</select></label></div>
<div class="row"><label>Miel (kg)<input id="f-honey" type="number" min="0" step=".01" value="${esc(x.honey)}"></label><label>Agua/base (L)<input id="f-water" type="number" min="0" step=".01" value="${esc(x.water)}"></label></div>
<div class="row"><label>OG<input id="f-og" inputmode="decimal" placeholder="1.085" value="${esc(x.og)}"></label><label>SG actual/final<input id="f-sg" inputmode="decimal" placeholder="1.010" value="${esc(x.sg)}"></label></div>
<div class="row"><label>Temperatura °C<input id="f-temp" type="number" step=".1" value="${esc(x.temp||'')}"></label><label>pH<input id="f-ph" type="number" min="0" max="14" step=".01" value="${esc(x.ph||'')}"></label></div>
<label>Levadura<input id="f-yeast" value="${esc(x.yeast||'')}" maxlength="120"></label>
<label>Notas<textarea id="f-notes" maxlength="2000">${esc(x.notes||'')}</textarea></label><div class="error" id="form-error"></div>
<div class="btn-row"><button class="btn" id="save-lot">Guardar lote</button></div></div>`;
$('#cancel-form').onclick=()=>{$('#lot-form').hidden=true};
$('#save-lot').onclick=()=>saveLot(x.id);
}

function saveLot(id){
const og=$('#f-og').value.trim(),sg=$('#f-sg').value.trim(),err=$('#form-error');err.textContent='';
if(og&&!validDensity(og)){err.textContent='OG no parece una densidad válida (0.900–1.200).';return}
if(sg&&!validDensity(sg)){err.textContent='SG no parece una densidad válida (0.900–1.200).';return}
if(og&&sg&&num(sg)>num(og)){err.textContent='La SG no puede ser mayor que la OG en una fermentación normal.';return}
const a=load(),id2=id||uid(),old=a.find(x=>x.id===id2);
const l={id:id2,name:$('#f-name').value.trim(),date:$('#f-date').value,cat:$('#f-cat').value,recipeId:old?.recipeId||'',honey:$('#f-honey').value,water:$('#f-water').value,yeast:$('#f-yeast').value.trim(),og,sg,temp:$('#f-temp').value,ph:$('#f-ph').value,status:$('#f-status').value,notes:$('#f-notes').value.trim(),events:old?.events||[],measurements:old?.measurements||[],createdAt:old?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};
const i=a.findIndex(x=>x.id===id2);i>=0?a[i]=l:a.push(l);save(a);$('#lot-form').hidden=true;renderLots();
}

$('#new-lot').onclick=()=>lotForm(null);

function renderLots(){
const a=load().sort((x,y)=>(y.date||'').localeCompare(x.date||''));const box=$('#lots-list');
if(!a.length){box.innerHTML='<div class="card empty">Todavía no tienes lotes.<br><br>Empieza con <b class="accent">+ Nuevo lote</b> o entra en Recetas.</div>';return}
box.innerHTML=a.map(l=>{const p=l.measurements||[],done=(l.events||[]).filter(e=>e.type==='step').length,percent=Math.min(100,done/7*100),rate=abv(l.og,l.sg);return `<article class="card lot"><div class="lot-head"><div><div class="lot-name">${esc(l.name||'Sin nombre')}</div><small class="muted">${dateFmt(l.date)} · ${esc(l.cat)}</small></div><span class="status">${esc(l.status)}</span></div><div class="stats"><div class="stat"><small>OG</small><b>${esc(l.og||'—')}</b></div><div class="stat"><small>SG</small><b>${esc(l.sg||'—')}</b></div><div class="stat"><small>ABV</small><b>${rate===null?'—':rate+'%'}</b></div><div class="stat"><small>Mediciones</small><b>${p.length}</b></div></div><div class="bar"><i style="width:${percent}%"></i></div><small class="muted">${done}/7 hitos registrados</small><div class="btn-row" style="margin-top:12px"><button class="btn sm" data-open="${l.id}">Abrir</button><button class="btn sm ghost" data-measure="${l.id}">+ Medición</button><button class="btn sm ghost" data-edit="${l.id}">Editar</button><button class="btn sm danger" data-delete="${l.id}">Eliminar</button></div></article>`}).join('');
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>detail(b.dataset.open));
document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const l=load().find(x=>x.id===b.dataset.edit);lotForm(l)});
document.querySelectorAll('[data-measure]').forEach(b=>b.onclick=()=>measurement(b.dataset.measure));
document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>delLot(b.dataset.delete));
}

function delLot(id){const l=load().find(x=>x.id===id);if(!l)return;if(!confirm(`¿Eliminar "${l.name}"? Esta acción no se puede deshacer.`))return;save(load().filter(x=>x.id!==id));for(let i=0;i<20;i++)deletePhoto(`${id}-${i}`).catch(()=>{});renderLots()}

function measurement(id){
const l=load().find(x=>x.id===id);if(!l)return;modal('Nueva medición',`<div class="form"><div class="row"><label>Fecha<input id="m-date" type="date" value="${new Date().toISOString().slice(0,10)}"></label><label>SG<input id="m-sg" inputmode="decimal" placeholder="1.020"></label></div><div class="row"><label>Temperatura °C<input id="m-temp" type="number" step=".1"></label><label>pH<input id="m-ph" type="number" min="0" max="14" step=".01"></label></div><label>Nota<textarea id="m-note"></textarea></label><div class="error" id="m-err"></div><button class="btn" id="m-save">Guardar medición</button></div>`);$('#m-save').onclick=()=>{const sg=$('#m-sg').value.trim();if(!validDensity(sg)){ $('#m-err').textContent='SG no válida.';return}const a=load(),x=a.find(y=>y.id===id);x.measurements=x.measurements||[];x.measurements.push({date:$('#m-date').value,sg,temp:$('#m-temp').value,ph:$('#m-ph').value,note:$('#m-note').value.trim()});x.sg=sg;x.updatedAt=new Date().toISOString();save(a);closeModal();renderLots()}
}

function detail(id){
const l=load().find(x=>x.id===id);if(!l)return;const ms=l.measurements||[],ev=l.events||[];modal(l.name,`<p class="muted">${dateFmt(l.date)} · ${esc(l.cat)} · ${esc(l.status)}</p><div class="stats"><div class="stat"><small>Miel</small><b>${esc(l.honey||'—')} kg</b></div><div class="stat"><small>Agua/base</small><b>${esc(l.water||'—')} L</b></div><div class="stat"><small>OG</small><b>${esc(l.og||'—')}</b></div><div class="stat"><small>ABV</small><b>${abv(l.og,l.sg)??'—'}${abv(l.og,l.sg)!==null?'%':''}</b></div></div><h3>Proceso · 7 hitos</h3><div class="timeline">${['Preparar y sanitizar','Mezclar y registrar OG','Enfriar','Inocular levadura','Fermentación primaria','Clarificar/trasiego','Embotellar/madurar'].map((s,i)=>{const e=ev.find(x=>x.step===i);return `<div class="event"><b>${i+1}. ${s}</b><br><button class="btn sm ghost" data-step="${i}" data-lot="${id}">${e?'✓ Completado · '+dateFmt(e.date):'Marcar completado'}</button></div>`}).join('')}</div><h3>Mediciones</h3>${ms.length?`<div class="measure-list">${ms.slice().reverse().map(m=>`<div class="measure"><span>${dateFmt(m.date)}<br><small class="muted">${esc(m.note||'')}</small></span><b>SG ${esc(m.sg)}${m.temp?' · '+esc(m.temp)+' °C':''}${m.ph?' · pH '+esc(m.ph):''}</b></div>`).join('')}</div>`:'<p class="muted">Aún no hay mediciones.</p>'}<h3>Fotos</h3><div class="photo-row" id="photos-${id}"></div><div class="btn-row" style="margin-top:10px"><label class="btn ghost">Añadir foto<input type="file" accept="image/*" capture="environment" hidden id="photo-input-${id}"></label></div><h3>Notas</h3><p class="muted">${esc(l.notes||'Sin notas')}</p>`);document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>toggleStep(b.dataset.lot,Number(b.dataset.step)));const inp=$(`#photo-input-${id}`);if(inp)inp.onchange=e=>photo(e.target.files[0],id);loadPhotos(id)}

function toggleStep(id,step){const a=load(),l=a.find(x=>x.id===id);l.events=l.events||[];const i=l.events.findIndex(e=>e.type==='step'&&e.step===step);if(i>=0)l.events.splice(i,1);else l.events.push({type:'step',step,date:new Date().toISOString().slice(0,10)});save(a);detail(id);renderLots()}

function modal(title,body){$('#modal-title').textContent=title;$('#modal-body').innerHTML=body;$('#modal').classList.add('open')}
function closeModal(){$('#modal').classList.remove('open');$('#modal-body').innerHTML=''}
$('#modal-close').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()}

function openDB(){return new Promise((res,rej)=>{const q=indexedDB.open(DB,1);q.onupgradeneeded=()=>q.result.createObjectStore(STORE);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}
async function savePhoto(key,file){if(!file)return;const img=await resize(file);const db=await openDB();return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(img,key);tx.oncomplete=res;tx.onerror=()=>rej(tx.error)})}
function resize(file,max=1200){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{let w=im.width,h=im.height;if(Math.max(w,h)>max){const k=max/Math.max(w,h);w=Math.round(w*k);h=Math.round(h*k)}const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(im,0,0,w,h);res(c.toDataURL('image/jpeg',.82))};im.onerror=rej;im.src=r.result};r.onerror=rej;r.readAsDataURL(file)})}
async function photo(file,id){try{await savePhoto(`${id}-${Date.now()}`,file);detail(id)}catch(e){alert('No se pudo guardar la foto: '+e.message)}}
async function loadPhotos(id){const db=await openDB();const tx=db.transaction(STORE,'readonly'),store=tx.objectStore(STORE),req=store.openCursor();const box=$(`#photos-${id}`);if(!box)return;req.onsuccess=()=>{const c=req.result;if(!c)return;if(String(c.key).startsWith(id+'-')){const im=document.createElement('img');im.className='photo';im.src=c.value;im.alt='Foto del lote';im.onclick=()=>window.open(c.value,'_blank','noopener');box.appendChild(im)}c.continue()}}

async function allPhotos(){const db=await openDB();return new Promise((res,rej)=>{const out={};const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).openCursor();req.onsuccess=()=>{const c=req.result;if(!c)return res(out);out[c.key]=c.value;c.continue()};req.onerror=()=>rej(req.error)})}
$('#backup').onclick=async()=>{const payload={app:'hidromiel-v3',version:3,createdAt:new Date().toISOString(),lotes:load(),photos:await allPhotos()};download(`hidromiel-v3-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(payload,null,2),'application/json')}
function download(name,data,type){const b=new Blob([data],{type}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),500)}
$('#restore').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const p=JSON.parse(await f.text());if(p.app!=='hidromiel-v3'||!Array.isArray(p.lotes))throw new Error('Copia no reconocida');const current=load(),ids=new Set(current.map(x=>x.id));save(current.concat(p.lotes.filter(x=>x&&x.id&&!ids.has(x.id))));const db=await openDB();const tx=db.transaction(STORE,'readwrite');for(const [k,v] of Object.entries(p.photos||{}))tx.objectStore(STORE).put(v,k);tx.oncomplete=()=>{renderLots();alert(`Restaurados ${p.lotes.length} lote(s) y ${Object.keys(p.photos||{}).length} foto(s).`)} }catch(err){alert('No se pudo restaurar: '+err.message)}e.target.value=''}

let deferredPrompt=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#install').hidden=false});$('#install').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#install').hidden=true}

renderTutorial();renderRecipeFilters();renderRecipes();renderTips();renderLots();route();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));
