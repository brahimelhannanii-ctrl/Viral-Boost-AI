
const button = document.getElementById("generate");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const platform = document.getElementById("platform").value;
  const idea = document.getElementById("idea").value.trim();
  const duration = Number(document.getElementById("duration").value);

  if (!idea) {
    result.textContent = "⚠️ كتب موضوع الفيديو أولا.";
    return;
  }

  const scenes = duration === 30 ? 3 : 6;
  const seconds = duration / scenes;

  let output = `🚀 VIRAL BOOST AI\n\n`;
  output += `📱 المنصة: ${platform}\n`;
  output += `💡 الموضوع: ${idea}\n`;
  output += `⏱️ المدة: ${duration} ثانية\n\n`;

  output += "🎬 السيناريو:\n";
  output += `البداية: سؤال أو لقطة قوية تشد الانتباه حول ${idea}.\n`;
  output += `الوسط: شرح الفكرة بمعلومات بسيطة ومشوقة.\n`;
  output += `النهاية: خلاصة قوية وطلب من المشاهد يشارك رأيه.\n\n`;

  output += "🎥 المشاهد:\n";

  for (let i = 1; i <= scenes; i++) {
    output += `المشهد ${i} (${seconds} ثواني): لقطة جذابة مرتبطة بموضوع ${idea}.\n`;
  }

  output += "\n🤖 برومبت توليد الفيديو:\n";
  output += `Create a vertical 9:16 engaging social media video about ${idea}. Use attractive visuals, smooth transitions, clear storytelling and subtitles.`;

  output += "\n\n🔥 عنوان مقترح:\n";
  output += `${idea} | شاهد للنهاية!\n`;

  output += "\n#Viral #Reels #Trending #Morocco #ViralBoostAI";

  result.textContent = output;
});

