async function verifyHash() {
  const hash = document.getElementById("hashInput").value.trim();
  if (!hash) return alert("Please enter a hash ID.");

  const res = await fetch(`https://us-central1-YOUR_FIREBASE_PROJECT.cloudfunctions.net/verifyTweet?hash=${hash}`);
  const data = await res.json();

  const resultBox = document.getElementById("result");
  if (data.valid) {
    resultBox.innerHTML = `
      ✅ <strong>Valid Tweet</strong><br/>
      👤 <b>User:</b> ${data.username}<br/>
      📅 <b>Date:</b> ${data.date}<br/>
      ⏱ <b>Sessions:</b> ${data.sessions}<br/>
      🕒 <b>Active Time:</b> ${data.activeTime} min<br/>
      🔥 <b>Streak:</b> ${data.streak}<br/>
      💬 <b>Message:</b> ${data.message || 'N/A'}<br/>
      🕵️‍♂️ Verified by ZevFocus CLI
    `;
  } else {
    resultBox.innerHTML = `❌ <strong>Invalid Tweet Hash</strong>`;
  }
}

