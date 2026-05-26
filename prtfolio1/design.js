const skills = [
  {
    name: 'Python',
    subskills: ['Flask', 'Django', 'Data Science', 'Machine Learning', 'Scripting', 'Automation'],
  },
  {
    name: 'JavaScript',
    subskills: ['React', 'Node.js', 'TypeScript', 'Frontend', 'Backend', 'APIs'],
  },
  {
    name: 'UI/UX',
    subskills: ['Design Systems', 'Wireframes', 'Prototyping', 'Accessibility', 'Animations', 'Branding'],
  },
  {
    name: 'DevOps',
    subskills: ['CI/CD', 'Docker', 'Kubernetes', 'Cloud', 'Monitoring', 'Infrastructure'],
  },
  {
    name: 'Data',
    subskills: ['SQL', 'Visualization', 'Analytics', 'ETL', 'Reporting', 'Modeling'],
  },
];

let activeIndex = 0;
let isTicking = false;

function createStyles() {
  const style = document.createElement('style');
  style.textContent = `
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; min-height: 100%; font-family: Arial, sans-serif; background: #081124; color: #f4f7ff; }
    body { overflow-x: hidden; }
    .app { width: 100%; min-height: 100vh; padding: 40px 20px; }
    .hero { max-width: 1120px; margin: 0 auto; display: grid; gap: 32px; grid-template-columns: 320px 1fr; }
    .aside { position: sticky; top: 20px; align-self: start; background: rgba(12, 25, 50, 0.9); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 24px; }
    .aside h1 { margin: 0 0 16px; font-size: 28px; line-height: 1.1; }
    .aside p { margin: 0 0 24px; color: #b8c3db; }
    .skill-list { display: grid; gap: 14px; }
    .skill-card { padding: 18px 20px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); background: rgba(8, 17, 36, 0.9); cursor: pointer; transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
    .skill-card.active { background: linear-gradient(135deg, rgba(48, 112, 255, 0.22), rgba(32, 35, 95, 0.9)); border-color: rgba(80, 170, 255, 0.4); transform: translateX(4px); }
    .skill-card span { display: inline-block; font-size: 18px; font-weight: 600; }
    .content { position: relative; min-height: calc(100vh - 80px); padding: 28px; border-radius: 28px; background: radial-gradient(circle at top left, rgba(49, 103, 255, 0.16), transparent 28%), rgba(7, 13, 29, 0.95); border: 1px solid rgba(255,255,255,0.08); overflow: hidden; }
    .content::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 20%, rgba(102, 191, 255, 0.12), transparent 18%), radial-gradient(circle at 80% 30%, rgba(90, 171, 255, 0.08), transparent 14%); pointer-events: none; }
    .tracker { position: relative; z-index: 1; width: 100%; height: 100%; display: grid; place-items: center; }
    .skill-display { position: relative; width: min(520px, 100%); height: min(520px, 100%); display: grid; place-items: center; }
    .skill-circle { width: 180px; height: 180px; border-radius: 50%; background: rgba(22, 45, 90, 0.94); border: 2px solid rgba(79, 146, 255, 0.4); display: grid; place-items: center; text-align: center; padding: 28px; }
    .skill-circle h2 { margin: 0; font-size: clamp(32px, 6vw, 48px); letter-spacing: 0.02em; }
    .subskill-item { position: absolute; width: 130px; height: 130px; border-radius: 50%; background: rgba(15, 25, 55, 0.96); border: 1px solid rgba(117, 189, 255, 0.16); display: grid; place-items: center; text-align: center; padding: 12px; transition: transform 0.3s ease, background 0.3s ease; }
    .subskill-item:hover { transform: scale(1.05); background: rgba(52, 109, 220, 0.16); }
    .subskill-item span { font-size: 14px; color: #d8e4ff; line-height: 1.4; }
    .pos-0 { top: 10%; left: 50%; transform: translate(-50%, 0); }
    .pos-1 { top: 38%; right: 8%; transform: translate(0, -50%); }
    .pos-2 { bottom: 18%; right: 18%; transform: translate(0, 0); }
    .pos-3 { bottom: 10%; left: 50%; transform: translate(-50%, 0); }
    .pos-4 { bottom: 22%; left: 8%; transform: translate(0, 0); }
    .pos-5 { top: 38%; left: 8%; transform: translate(0, -50%); }
    @media (max-width: 960px) {
      .hero { grid-template-columns: 1fr; }
      .aside { position: static; }
      .content { padding: 20px; }
      .skill-display { min-height: 520px; }
    }
    @media (max-width: 640px) {
      .skill-card { padding: 16px; }
      .subskill-item { width: 110px; height: 110px; }
    }
  `;
  document.head.appendChild(style);
}

function createSkillCard(skill, index) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'skill-card';
  card.innerHTML = `<span>${skill.name}</span>`;
  card.addEventListener('click', () => updateActive(index, true));
  return card;
}

function renderSkills() {
  const list = document.querySelector('.skill-list');
  skills.forEach((skill, index) => {
    const card = createSkillCard(skill, index);
    if (index === activeIndex) card.classList.add('active');
    list.appendChild(card);
  });
}

function renderMainPanel() {
  const container = document.querySelector('.skill-display');
  container.innerHTML = '';
  const skillCircle = document.createElement('div');
  skillCircle.className = 'skill-circle';
  skillCircle.innerHTML = `<h2>${skills[activeIndex].name}</h2>`;
  container.appendChild(skillCircle);

  skills[activeIndex].subskills.forEach((subskill, idx) => {
    const item = document.createElement('div');
    item.className = `subskill-item pos-${idx % 6}`;
    item.innerHTML = `<span>${subskill}</span>`;
    container.appendChild(item);
  });
}

function updateActive(index, scrollIntoView = false) {
  if (index === activeIndex) return;
  activeIndex = index;
  const cards = document.querySelectorAll('.skill-card');
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === activeIndex);
  });
  renderMainPanel();
  if (scrollIntoView) {
    cards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function updateFromScroll() {
  const cards = Array.from(document.querySelectorAll('.skill-card'));
  const viewportCenter = window.innerHeight / 2;
  let bestIndex = activeIndex;
  let bestDistance = Infinity;

  cards.forEach((card, idx) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(cardCenter - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = idx;
    }
  });

  if (bestIndex !== activeIndex) {
    updateActive(bestIndex);
  }
}

function init() {
  createStyles();
  let app = document.querySelector('#app');
  if (!app) {
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
  }
  app.className = 'app';
  app.innerHTML = `
    <div class="hero">
      <aside class="aside">
        <h1>Scrollable Skill Explorer</h1>
        <p>Scroll through the main skills. The selected skill expands in the center and its subskills appear around it.</p>
        <div class="skill-list"></div>
      </aside>
      <section class="content">
        <div class="tracker">
          <div class="skill-display"></div>
        </div>
      </section>
    </div>
  `;
  renderSkills();
  renderMainPanel();

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateFromScroll();
        isTicking = false;
      });
      isTicking = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
