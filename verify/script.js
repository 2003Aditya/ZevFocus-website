async function verifyHash() {
  const hash = document.getElementById("hashInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!hash) {
    alert("Please enter a hash ID.");
    return;
  }

  try {
    const res = await fetch("https://zev-focus-backend.vercel.app/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hash }),
    });

    const data = await res.json();
    console.log("Backend response:", data);

    if (data.valid) {
      resultBox.innerHTML = `
        ✅ <strong>Valid Tweet</strong><br/>
        👤 <b>User:</b> ${data.username}<br/>
        📅 <b>Date:</b> ${data.date}<br/>
        ⏱ <b>Active Time:</b> ${data.activeTime} min<br/>
        🧮 <b>Sessions:</b> ${data.sessions}<br/>
        🔥 <b>Streak:</b> ${data.streak ?? 'N/A'}<br/>
        💬 <b>Message:</b> ${data.message ?? 'N/A'}<br/>
        🕵️‍♂️ Verified by ZevFocus CLI
      `;
    } else {
      resultBox.innerHTML = `❌ <strong>Invalid Tweet Hash</strong>`;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    resultBox.innerHTML = `⚠️ <strong>Server Error:</strong> Please try again later.`;
  }
}

