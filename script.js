
function convertText() {
  const input = document.getElementById("inputText").value;
  const lines = input.split("\n");
  const filtered = lines.filter(line => !line.includes("📌 แอดมินขอสรุปยอดนะคะ"));
  document.getElementById("output").innerText = filtered.join("\n");
}

function copyOutput() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => alert("คัดลอกผลลัพธ์แล้ว!"));
}
