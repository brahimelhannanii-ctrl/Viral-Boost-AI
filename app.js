const $ = id => document.getElementById(id);
let lastText = "";
const templates = {
  "محتوى عالمي": ["واش عمرك تساءلتي علاش...?","المفاجأة هي أن الجواب أبسط مما كتظن!","بقا معايا حتى للآخر، وغادي تعرف معلومة غادي تبدّل نظرتك."],
  "حياة البادية والفلاحة": ["في البادية كاين سرّ صغير كيعرفوه غير الناس ديال الأرض...","من طريقة العناية حتى للنتيجة، التفاصيل الصغيرة هي اللي كتفرق.","شنو رأيكم؟ شاركونا تجاربكم فالتعليقات."],
  "قصص ومواقف": ["نهار عادي بدا بحال أي نهار، ولكن وقع فيه موقف ما كانش فالحسبان...","ومن تما تبدلات الحكاية كاملة، والدرس اللي بقى هو...","واش سبق ليكم وقع ليكم موقف بحالو؟"],
  "معلومات وحقائق": ["معلومة قصيرة ولكن ممكن تفاجئك!","السبب أو التفسير هو أن التفاصيل العلمية كتبيّن لينا...","تابع الصفحة للمزيد من المعلومات المفيدة."],
  "ترفيه وضحك": ["تخيل معايا هاد الموقف المضحك...","الأول قال حاجة والثاني فهمها بطريقة أخرى، وهنا بدات الكوميديا!","قول لينا شكون فيكم كيوقع ليه هادشي."]
};
function makeContent(){
  const platform=$("platform").value, niche=$("niche").value, duration=+$("duration").value, language=$("language").value;
  const idea=$("idea").value.trim() || "فكرة رائجة من مجال "+niche;
  const lines=templates[niche] || templates["محتوى عالمي"];
  const title="ما غاديش تصدق هاد الشي! 😲";
  const scenes=duration<=15?lines.slice(0,2):duration>=45?[...lines, "زيد ركّز فهاد التفصيل المهم..."]:lines;
  const hashtags="#viral #reels #fyp #المغرب #ترند";
  const sections=[
    ["المنصة والموضوع",`${platform} · ${duration} ثانية · ${language}\nالفكرة: ${idea}`],
    ["العنوان المقترح",title],
    ["السيناريو والتعليق الصوتي",scenes.join("\n\n")],
    ["تقسيم المشاهد",scenes.map((s,i)=>`المشهد ${i+1}: ${s}\nالصورة: لقطة عمودية 9:16، حركة كاميرا خفيفة، نص واضح على الشاشة.`).join("\n\n")],
    ["برومبت توليد الفيديو",`Create a vertical 9:16 ${duration}-second short video about: ${idea}. Style: engaging social media storytelling, clear subject, dynamic but smooth cuts, readable captions, strong opening hook, no logos, no watermark.`],
    ["الوصف والهاشتاغات",`شنو رأيكم فهاد الموضوع؟ خليو لينا رأيكم فالتعليقات.\n${hashtags}`]
  ];
  lastText=sections.map(([h,b])=>h+"\n"+b).join("\n\n");
  $("result").innerHTML=sections.map(([h,b])=>`<div class="result-block"><h3>${h}</h3><div>${escapeHtml(b)}</div></div>`).join("");
  $("output").classList.remove("hidden");
  $("output").scrollIntoView({behavior:"smooth"});
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("generate").addEventListener("click",makeContent);
$("copy").addEventListener("click",async()=>{if(lastText){await navigator.clipboard.writeText(lastText);$("copy").textContent="تم النسخ ✓";setTimeout(()=>$("copy").textContent="نسخ المحتوى",1800);}});
