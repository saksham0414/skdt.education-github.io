function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });
  const page = document.getElementById(pageId);
  page.classList.add('active');
  page.style.display = 'block';

  if (pageId === 'courses') loadCourses();
  if (pageId === 'videos') loadVideos();
}

function loadCourses() {
  fetch('courses.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('course-list');
      container.innerHTML = '';
      data.forEach(course => {
        container.innerHTML += `
          <div>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
          </div>`;
      });
    });
}

function loadVideos() {
  const videos = [
    { title: "Kinematics Part 1", id: "dQw4w9WgXcQ" },
    { title: "Organic Chemistry Basics", id: "3fumBcKC6RE" },
    { title: "Maths Integration", id: "2vjPBrBU-TM" }
  ];
  const container = document.getElementById('video-section');
  container.innerHTML = '';
  videos.forEach(video => {
    container.innerHTML += `
      <div>
        <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        <p>${video.title}</p>
      </div>`;
  });
}

function validateContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('contact-result').innerText = "✅ Message sent!";
    return false;
  } else {
    document.getElementById('contact-result').innerText = "❌ Please fill all fields.";
    return false;
  }
}
