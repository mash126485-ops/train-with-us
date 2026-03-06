/* ============================================================
   FitPro — Personal Fitness Trainer Dashboard
   Dynamic, Interactive, Sleek & Classy
   ============================================================ */

(() => {
  'use strict';

  // ─── SAMPLE DATA ───
  const clients = [
    { id: 1, name: 'Sarah Mitchell', initials: 'SM', goal: 'Weight Loss · 15 lbs', status: 'active', sessions: 32, streak: 14, progress: 78, color: '#58a6ff' },
    { id: 2, name: 'Marcus Chen', initials: 'MC', goal: 'Muscle Gain · Bulk Phase', status: 'active', sessions: 48, streak: 21, progress: 85, color: '#d4a853' },
    { id: 3, name: 'Elena Rodriguez', initials: 'ER', goal: 'Marathon Prep · Sub 4hr', status: 'active', sessions: 56, streak: 30, progress: 92, color: '#3ecf8e' },
    { id: 4, name: 'James Patterson', initials: 'JP', goal: 'Strength · Powerlifting', status: 'active', sessions: 40, streak: 18, progress: 71, color: '#e5534b' },
    { id: 5, name: 'Aisha Thompson', initials: 'AT', goal: 'Flexibility & Mobility', status: 'new', sessions: 4, streak: 4, progress: 15, color: '#a78bfa' },
    { id: 6, name: 'David Kim', initials: 'DK', goal: 'General Fitness', status: 'active', sessions: 24, streak: 10, progress: 62, color: '#f97316' },
    { id: 7, name: 'Olivia Hart', initials: 'OH', goal: 'Post-Rehab Recovery', status: 'paused', sessions: 18, streak: 0, progress: 45, color: '#ec4899' },
    { id: 8, name: 'Ryan Brooks', initials: 'RB', goal: 'Body Recomposition', status: 'active', sessions: 36, streak: 12, progress: 68, color: '#06b6d4' },
  ];

  const todaySessions = [
    { time: '6:30', client: 'Marcus Chen', type: 'Strength Training', status: 'completed' },
    { time: '8:00', client: 'Sarah Mitchell', type: 'HIIT Circuit', status: 'completed' },
    { time: '10:00', client: 'Elena Rodriguez', type: 'Endurance Run', status: 'confirmed' },
    { time: '12:30', client: 'David Kim', type: 'Full Body', status: 'confirmed' },
    { time: '3:00', client: 'James Patterson', type: 'Powerlifting', status: 'confirmed' },
    { time: '5:30', client: 'Aisha Thompson', type: 'Yoga & Stretch', status: 'pending' },
  ];

  const activities = [
    { type: 'workout', text: '<strong>Marcus Chen</strong> completed Strength Session — new bench press PR', time: '2 hours ago' },
    { type: 'client', text: '<strong>Aisha Thompson</strong> joined as a new client', time: '4 hours ago' },
    { type: 'payment', text: '<strong>Elena Rodriguez</strong> paid for 10-session package ($750)', time: '6 hours ago' },
    { type: 'goal', text: '<strong>Sarah Mitchell</strong> hit her 10 lb weight loss milestone', time: '1 day ago' },
    { type: 'workout', text: '<strong>James Patterson</strong> set a new deadlift PR — 405 lbs', time: '1 day ago' },
    { type: 'client', text: '<strong>Ryan Brooks</strong> completed 8-week body recomp program', time: '2 days ago' },
  ];

  const workouts = [
    { name: 'Upper Body Power', category: 'strength', duration: '55 min', difficulty: 'Advanced', exercises: ['Bench Press 4×6', 'Overhead Press 3×8', 'Weighted Pull-Ups 4×6', 'Dumbbell Rows 3×10'] },
    { name: 'Fat Burn HIIT', category: 'hiit', duration: '35 min', difficulty: 'Intermediate', exercises: ['Burpees 45s/15s', 'Mountain Climbers', 'Box Jumps', 'Battle Ropes'] },
    { name: 'Endurance Builder', category: 'cardio', duration: '60 min', difficulty: 'Intermediate', exercises: ['5K Warm-up', 'Tempo Intervals', 'Hill Repeats', 'Cool Down Jog'] },
    { name: 'Mobility Flow', category: 'flexibility', duration: '40 min', difficulty: 'Beginner', exercises: ['Dynamic Stretching', 'Hip Openers', 'Thoracic Rotations', 'Yoga Sun Salutations'] },
    { name: 'Leg Day Destroyer', category: 'strength', duration: '50 min', difficulty: 'Advanced', exercises: ['Back Squat 5×5', 'Romanian Deadlift 4×8', 'Walking Lunges 3×12', 'Leg Press 4×10'] },
    { name: 'Sprint Intervals', category: 'hiit', duration: '30 min', difficulty: 'Advanced', exercises: ['100m Sprints ×8', 'Sled Pushes', 'Prowler Drags', 'Shuttle Runs'] },
  ];

  const weekSchedule = [
    { day: 'Mon', date: 3, events: [{ name: 'Marcus · Strength', cat: 'strength' }, { name: 'Sarah · HIIT', cat: 'hiit' }] },
    { day: 'Tue', date: 4, events: [{ name: 'Elena · Cardio', cat: 'cardio' }, { name: 'David · Full Body', cat: 'strength' }] },
    { day: 'Wed', date: 5, events: [{ name: 'James · Power', cat: 'strength' }, { name: 'Aisha · Mobility', cat: 'flexibility' }] },
    { day: 'Thu', date: 6, events: [{ name: 'Marcus · Strength', cat: 'strength' }, { name: 'Sarah · HIIT', cat: 'hiit' }, { name: 'Ryan · Recomp', cat: 'cardio' }] },
    { day: 'Fri', date: 7, events: [{ name: 'Elena · Run', cat: 'cardio' }, { name: 'James · Power', cat: 'strength' }] },
    { day: 'Sat', date: 8, events: [{ name: 'Group HIIT', cat: 'hiit' }] },
    { day: 'Sun', date: 9, events: [] },
  ];

  const notifications = [
    { text: '<strong>Aisha Thompson</strong> needs her workout plan for next week', time: '30 min ago', unread: true },
    { text: '<strong>Marcus Chen</strong> updated his nutrition log — review needed', time: '2 hours ago', unread: true },
    { text: 'Payment received from <strong>Elena Rodriguez</strong> — $750', time: '6 hours ago', unread: true },
    { text: '<strong>David Kim</strong> cancelled tomorrow\'s session', time: '1 day ago', unread: false },
    { text: 'Monthly report is ready for download', time: '2 days ago', unread: false },
  ];

  const transactions = [
    { name: 'Sarah Mitchell — 10 Sessions', date: 'Mar 5, 2026', amount: '+$650', type: 'income' },
    { name: 'Elena Rodriguez — 10 Sessions', date: 'Mar 4, 2026', amount: '+$750', type: 'income' },
    { name: 'Gym Equipment — Resistance Bands', date: 'Mar 3, 2026', amount: '-$85', type: 'expense' },
    { name: 'Marcus Chen — Monthly Package', date: 'Mar 1, 2026', amount: '+$480', type: 'income' },
    { name: 'Software Subscription — TrainerPro', date: 'Mar 1, 2026', amount: '-$29', type: 'expense' },
    { name: 'David Kim — 5 Sessions', date: 'Feb 28, 2026', amount: '+$350', type: 'income' },
  ];

  const milestones = [
    { icon: '🏆', title: 'Sarah lost 10 lbs', date: 'Mar 4, 2026' },
    { icon: '💪', title: 'Marcus bench pressed 225 lbs', date: 'Mar 3, 2026' },
    { icon: '🏃', title: 'Elena ran sub-45min 10K', date: 'Feb 28, 2026' },
    { icon: '🎯', title: 'James hit 400 lb deadlift', date: 'Feb 25, 2026' },
  ];

  const leaderboard = [
    { name: 'Elena Rodriguez', initials: 'ER', score: 96, color: '#3ecf8e' },
    { name: 'Marcus Chen', initials: 'MC', score: 91, color: '#d4a853' },
    { name: 'James Patterson', initials: 'JP', score: 88, color: '#e5534b' },
    { name: 'Sarah Mitchell', initials: 'SM', score: 84, color: '#58a6ff' },
    { name: 'Ryan Brooks', initials: 'RB', score: 79, color: '#06b6d4' },
  ];

  // ─── DOM REFS ───
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ─── THEME TOGGLE ───
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('fitpro-theme') || 'dark';
  if (savedTheme === 'light') document.documentElement.setAttribute('data-theme', 'light');

  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('fitpro-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('fitpro-theme', 'light');
    }
    updateChartColors();
  });

  // ─── SIDEBAR MOBILE ───
  const sidebar = $('#sidebar');
  const menuToggle = $('#menuToggle');
  const sidebarOverlay = $('#sidebarOverlay');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
  });

  sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  });

  // ─── PAGE NAVIGATION ───
  const navItems = $$('.nav-item');
  const pages = $$('.page');
  const pageTitle = $('#pageTitle');
  const pageSubtitle = $('#pageSubtitle');

  const pageTitles = {
    dashboard: { title: 'Dashboard', subtitle: 'Welcome back, Jordan. Here\'s your overview.' },
    clients: { title: 'Clients', subtitle: 'Manage your client roster and track their progress.' },
    schedule: { title: 'Schedule', subtitle: 'Plan and manage your training sessions.' },
    workouts: { title: 'Workouts', subtitle: 'Browse and create training programs.' },
    progress: { title: 'Progress', subtitle: 'Track client achievements and milestones.' },
    finances: { title: 'Finances', subtitle: 'Revenue, payments, and financial overview.' },
  };

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      switchPage(page);
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    });
  });

  function switchPage(page) {
    navItems.forEach(n => n.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    const activeNav = document.querySelector(`.nav-item[data-page="${page}"]`);
    const activePage = $(`#page-${page}`);

    if (activeNav) activeNav.classList.add('active');
    if (activePage) activePage.classList.add('active');

    const info = pageTitles[page] || { title: 'Dashboard', subtitle: '' };
    pageTitle.textContent = info.title;
    pageSubtitle.textContent = info.subtitle;

    // Re-trigger animations
    activePage.querySelectorAll('[data-animate]').forEach((el, i) => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 60 * i);
    });

    // Re-trigger stat counters
    if (page === 'dashboard' || page === 'finances') {
      activePage.querySelectorAll('.stat-value[data-count]').forEach(el => animateCounter(el));
    }

    // Re-trigger progress bars
    if (page === 'clients') {
      setTimeout(() => {
        activePage.querySelectorAll('.progress-fill').forEach(bar => {
          bar.style.width = bar.dataset.target + '%';
        });
      }, 300);
    }

    // Init charts for the page
    if (page === 'progress') initProgressChart();
    if (page === 'finances') initRevenueChart();
  }

  // ─── NOTIFICATIONS ───
  const notificationBtn = $('#notificationBtn');
  const notificationsPanel = $('#notificationsPanel');
  const clearNotifications = $('#clearNotifications');

  notificationBtn.addEventListener('click', () => {
    notificationsPanel.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!notificationsPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
      notificationsPanel.classList.remove('open');
    }
  });

  clearNotifications.addEventListener('click', () => {
    $$('.notification-item').forEach(item => item.classList.remove('unread'));
    const badge = $('.notification-badge');
    if (badge) badge.style.display = 'none';
  });

  // ─── MODAL ───
  const modalOverlay = $('#modalOverlay');
  const modal = $('#modal');
  const modalTitle = $('#modalTitle');
  const modalBody = $('#modalBody');
  const modalClose = $('#modalClose');

  function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modalOverlay.classList.add('open');
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      notificationsPanel.classList.remove('open');
    }
  });

  // ─── ADD CLIENT MODAL ───
  $('#addClientBtn').addEventListener('click', () => {
    openModal('Add New Client', `
      <form id="addClientForm">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First name" required />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last name" required />
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="client@email.com" required />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Goal</label>
            <select>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Endurance</option>
              <option>Strength</option>
              <option>Flexibility</option>
              <option>General Fitness</option>
            </select>
          </div>
          <div class="form-group">
            <label>Package</label>
            <select>
              <option>5 Sessions</option>
              <option>10 Sessions</option>
              <option>Monthly Unlimited</option>
              <option>Pay Per Session</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <textarea rows="3" placeholder="Any health conditions, preferences..."></textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-ghost" onclick="document.getElementById('modalOverlay').classList.remove('open')">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Client</button>
        </div>
      </form>
    `);

    $('#addClientForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll('input');
      const firstName = inputs[0].value.trim();
      const lastName = inputs[1].value.trim();
      if (firstName && lastName) {
        const initials = firstName[0] + lastName[0];
        const colors = ['#58a6ff', '#d4a853', '#3ecf8e', '#e5534b', '#a78bfa', '#f97316', '#ec4899', '#06b6d4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        clients.push({
          id: clients.length + 1,
          name: `${firstName} ${lastName}`,
          initials: initials.toUpperCase(),
          goal: 'New Client',
          status: 'new',
          sessions: 0,
          streak: 0,
          progress: 0,
          color,
        });
        renderClients('all');
        closeModal();
      }
    });
  });

  // ─── ADD SESSION MODAL ───
  $('#addSessionBtn').addEventListener('click', () => {
    const clientOptions = clients.map(c => `<option>${c.name}</option>`).join('');
    openModal('Schedule New Session', `
      <form id="addSessionForm">
        <div class="form-group">
          <label>Client</label>
          <select>${clientOptions}</select>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Date</label>
            <input type="date" required />
          </div>
          <div class="form-group">
            <label>Time</label>
            <input type="time" required />
          </div>
        </div>
        <div class="form-group">
          <label>Session Type</label>
          <select>
            <option>Strength Training</option>
            <option>HIIT Circuit</option>
            <option>Endurance Run</option>
            <option>Full Body</option>
            <option>Yoga & Stretch</option>
            <option>Powerlifting</option>
          </select>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <textarea rows="3" placeholder="Focus areas, equipment needed..."></textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-ghost" onclick="document.getElementById('modalOverlay').classList.remove('open')">Cancel</button>
          <button type="submit" class="btn btn-primary">Schedule</button>
        </div>
      </form>
    `);

    $('#addSessionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // ─── ADD WORKOUT MODAL ───
  $('#addWorkoutBtn').addEventListener('click', () => {
    openModal('Create Workout', `
      <form id="addWorkoutForm">
        <div class="form-group">
          <label>Workout Name</label>
          <input type="text" placeholder="e.g., Full Body Blast" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Category</label>
            <select id="newWorkoutCat">
              <option value="strength">Strength</option>
              <option value="cardio">Cardio</option>
              <option value="hiit">HIIT</option>
              <option value="flexibility">Flexibility</option>
            </select>
          </div>
          <div class="form-group">
            <label>Duration</label>
            <input type="text" placeholder="e.g., 45 min" required />
          </div>
        </div>
        <div class="form-group">
          <label>Difficulty</label>
          <select>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div class="form-group">
          <label>Exercises (one per line)</label>
          <textarea rows="4" placeholder="Bench Press 4×8&#10;Overhead Press 3×10&#10;..." required></textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-ghost" onclick="document.getElementById('modalOverlay').classList.remove('open')">Cancel</button>
          <button type="submit" class="btn btn-primary">Create</button>
        </div>
      </form>
    `);

    $('#addWorkoutForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll('input');
      const selects = e.target.querySelectorAll('select');
      const textarea = e.target.querySelector('textarea');
      const name = inputs[0].value.trim();
      const category = selects[0].value;
      const duration = inputs[1].value.trim();
      const difficulty = selects[1].value;
      const exercises = textarea.value.split('\n').filter(l => l.trim());

      if (name && exercises.length) {
        workouts.push({ name, category, duration, difficulty, exercises });
        renderWorkouts('all');
        closeModal();
      }
    });
  });

  // ─── COUNTER ANIMATION ───
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ─── RENDER: TODAY SCHEDULE ───
  function renderTodaySchedule() {
    const container = $('#todaySchedule');
    container.innerHTML = todaySessions.map(s => `
      <div class="schedule-item">
        <span class="schedule-time">${s.time}</span>
        <div class="schedule-info">
          <div class="schedule-client">${s.client}</div>
          <div class="schedule-type">${s.type}</div>
        </div>
        <span class="schedule-status ${s.status}">${s.status}</span>
      </div>
    `).join('');
  }

  // ─── RENDER: ACTIVITY FEED ───
  function renderActivityFeed() {
    const container = $('#activityFeed');
    const icons = { workout: '🏋️', client: '👤', payment: '💰', goal: '🎯' };
    container.innerHTML = activities.map(a => `
      <div class="activity-item">
        <div class="activity-dot ${a.type}">${icons[a.type]}</div>
        <div>
          <div class="activity-text">${a.text}</div>
          <div class="activity-time">${a.time}</div>
        </div>
      </div>
    `).join('');
  }

  // ─── RENDER: CLIENTS ───
  function renderClients(filter) {
    const container = $('#clientsGrid');
    const filtered = filter === 'all' ? clients : clients.filter(c => c.status === filter);

    container.innerHTML = filtered.map(c => `
      <div class="client-card" data-id="${c.id}">
        <div class="client-header">
          <div class="client-avatar" style="background: ${c.color}22; color: ${c.color}">${c.initials}</div>
          <div>
            <div class="client-name">${c.name}</div>
            <div class="client-goal">${c.goal}</div>
          </div>
          <span class="client-status ${c.status}">${c.status}</span>
        </div>
        <div class="client-stats">
          <div class="client-stat">
            <div class="client-stat-val">${c.sessions}</div>
            <div class="client-stat-label">Sessions</div>
          </div>
          <div class="client-stat">
            <div class="client-stat-val">${c.streak}d</div>
            <div class="client-stat-label">Streak</div>
          </div>
          <div class="client-stat">
            <div class="client-stat-val">${c.progress}%</div>
            <div class="client-stat-label">Progress</div>
          </div>
        </div>
        <div class="client-progress">
          <div class="progress-label">
            <span>Goal Progress</span>
            <span>${c.progress}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" data-target="${c.progress}"></div>
          </div>
        </div>
      </div>
    `).join('');

    // Animate progress bars
    setTimeout(() => {
      container.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.target + '%';
      });
    }, 300);
  }

  // Client filter chips
  $$('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderClients(chip.dataset.filter);
    });
  });

  // ─── RENDER: CALENDAR ───
  function renderCalendar() {
    const container = $('#calendarGrid');
    const today = new Date();
    const todayDate = today.getDate();

    container.innerHTML = weekSchedule.map(d => `
      <div class="calendar-day ${d.date === todayDate ? 'today' : ''}">
        <div class="calendar-day-header">
          <span class="calendar-day-name">${d.day}</span>
          <span class="calendar-day-num">${d.date}</span>
        </div>
        <div class="calendar-events">
          ${d.events.map(e => `<div class="calendar-event ${e.cat}">${e.name}</div>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // ─── RENDER: WORKOUTS ───
  function renderWorkouts(filter) {
    const container = $('#workoutsGrid');
    const filtered = filter === 'all' ? workouts : workouts.filter(w => w.category === filter);

    container.innerHTML = filtered.map(w => `
      <div class="workout-card">
        <div class="workout-banner ${w.category}"></div>
        <div class="workout-body">
          <div class="workout-category ${w.category}">${w.category}</div>
          <div class="workout-name">${w.name}</div>
          <div class="workout-meta">
            <span class="workout-meta-item">⏱ ${w.duration}</span>
            <span class="workout-meta-item">📊 ${w.difficulty}</span>
          </div>
          <ul class="workout-exercises">
            ${w.exercises.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Workout filter chips
  $$('[data-wfilter]').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('[data-wfilter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderWorkouts(chip.dataset.wfilter);
    });
  });

  // ─── RENDER: NOTIFICATIONS ───
  function renderNotifications() {
    const container = $('#notificationsList');
    container.innerHTML = notifications.map(n => `
      <div class="notification-item ${n.unread ? 'unread' : ''}">
        <div class="notification-dot-col"><div class="notification-dot"></div></div>
        <div>
          <div class="notification-text">${n.text}</div>
          <div class="notification-time">${n.time}</div>
        </div>
      </div>
    `).join('');
  }

  // ─── RENDER: TRANSACTIONS ───
  function renderTransactions() {
    const container = $('#transactionsList');
    container.innerHTML = transactions.map(t => `
      <div class="transaction-item">
        <div class="transaction-icon ${t.type}">
          ${t.type === 'income' ? '↑' : '↓'}
        </div>
        <div class="transaction-info">
          <div class="transaction-name">${t.name}</div>
          <div class="transaction-date">${t.date}</div>
        </div>
        <div class="transaction-amount ${t.type}">${t.amount}</div>
      </div>
    `).join('');
  }

  // ─── RENDER: MILESTONES & LEADERBOARD ───
  function renderMilestones() {
    const container = $('#milestonesList');
    container.innerHTML = milestones.map(m => `
      <div class="milestone-item">
        <div class="milestone-icon">${m.icon}</div>
        <div class="milestone-text">
          <strong>${m.title}</strong>
          <span class="milestone-date">${m.date}</span>
        </div>
      </div>
    `).join('');
  }

  function renderLeaderboard() {
    const container = $('#leaderboardList');
    container.innerHTML = leaderboard.map((l, i) => `
      <div class="leaderboard-item">
        <span class="leaderboard-rank">${i + 1}</span>
        <div class="leaderboard-avatar" style="background: ${l.color}22; color: ${l.color}">${l.initials}</div>
        <span class="leaderboard-name">${l.name}</span>
        <span class="leaderboard-score">${l.score}%</span>
      </div>
    `).join('');
  }

  // ─── RENDER: PROGRESS CLIENT OPTIONS ───
  function renderProgressClientOptions() {
    const select = $('#progressClient');
    clients.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.name;
      select.appendChild(opt);
    });
  }

  // ─── TODAY'S DATE ───
  function setTodayDate() {
    const now = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    $('#todayDate').textContent = now.toLocaleDateString('en-US', options);
  }

  // ─── CHARTS ───
  let sessionsChart, clientActivityChart, progressChartInstance, revenueChartInstance;

  function getChartTextColor() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? '#555570' : '#9ea0b0';
  }

  function getChartGridColor() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? '#e0e0e5' : '#2a2d3e';
  }

  function initSessionsChart() {
    const ctx = document.getElementById('sessionsChart').getContext('2d');
    sessionsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Sessions',
            data: [5, 4, 6, 7, 5, 3, 1],
            backgroundColor: 'rgba(212, 168, 83, 0.5)',
            borderColor: '#d4a853',
            borderWidth: 2,
            borderRadius: 6,
            borderSkipped: false,
          },
          {
            label: 'Last Week',
            data: [4, 3, 5, 5, 4, 2, 0],
            backgroundColor: 'rgba(158, 160, 176, 0.15)',
            borderColor: 'rgba(158, 160, 176, 0.3)',
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: { color: getChartTextColor(), usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 11 } },
          },
          tooltip: {
            backgroundColor: '#1c1e2b',
            titleColor: '#f0f0f5',
            bodyColor: '#9ea0b0',
            borderColor: '#2a2d3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: getChartTextColor(), font: { size: 11 } } },
          y: { grid: { color: getChartGridColor() }, ticks: { color: getChartTextColor(), font: { size: 11 }, stepSize: 2 }, beginAtZero: true },
        },
      },
    });
  }

  function initClientActivityChart() {
    const ctx = document.getElementById('clientActivityChart').getContext('2d');
    clientActivityChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Strength', 'Cardio', 'HIIT', 'Flexibility'],
        datasets: [{
          data: [38, 24, 28, 10],
          backgroundColor: ['#d4a853', '#58a6ff', '#e5534b', '#3ecf8e'],
          borderColor: 'transparent',
          borderWidth: 0,
          hoverOffset: 8,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: getChartTextColor(), usePointStyle: true, pointStyle: 'circle', padding: 14, font: { size: 11 } },
          },
          tooltip: {
            backgroundColor: '#1c1e2b',
            titleColor: '#f0f0f5',
            bodyColor: '#9ea0b0',
            borderColor: '#2a2d3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%` },
          },
        },
      },
    });
  }

  function initProgressChart() {
    if (progressChartInstance) progressChartInstance.destroy();
    const ctx = document.getElementById('progressChart').getContext('2d');
    progressChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets: [
          {
            label: 'Sarah — Weight (lbs)',
            data: [165, 163, 162, 160, 159, 158, 157, 156, 155, 155, 154, 153],
            borderColor: '#58a6ff',
            backgroundColor: 'rgba(88, 166, 255, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: 'Marcus — Bench (lbs)',
            data: [155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 210, 225],
            borderColor: '#d4a853',
            backgroundColor: 'rgba(212, 168, 83, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: { color: getChartTextColor(), usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 11 } },
          },
          tooltip: {
            backgroundColor: '#1c1e2b',
            titleColor: '#f0f0f5',
            bodyColor: '#9ea0b0',
            borderColor: '#2a2d3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
          },
        },
        scales: {
          x: { grid: { color: getChartGridColor() }, ticks: { color: getChartTextColor(), font: { size: 10 } } },
          y: { grid: { color: getChartGridColor() }, ticks: { color: getChartTextColor(), font: { size: 11 } } },
        },
      },
    });
  }

  function initRevenueChart() {
    if (revenueChartInstance) revenueChartInstance.destroy();
    const ctx = document.getElementById('revenueChart').getContext('2d');
    revenueChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Revenue',
          data: [8200, 9100, 9800, 10500, 11200, 11800, 12480],
          borderColor: '#3ecf8e',
          backgroundColor: 'rgba(62, 207, 142, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#3ecf8e',
          borderWidth: 2.5,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1c1e2b',
            titleColor: '#f0f0f5',
            bodyColor: '#9ea0b0',
            borderColor: '#2a2d3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            callbacks: { label: (ctx) => ` $${ctx.parsed.y.toLocaleString()}` },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: getChartTextColor(), font: { size: 11 } } },
          y: {
            grid: { color: getChartGridColor() },
            ticks: { color: getChartTextColor(), font: { size: 11 }, callback: (v) => '$' + (v / 1000) + 'k' },
          },
        },
      },
    });
  }

  function updateChartColors() {
    const textColor = getChartTextColor();
    const gridColor = getChartGridColor();
    [sessionsChart, clientActivityChart, progressChartInstance, revenueChartInstance].forEach(chart => {
      if (!chart) return;
      if (chart.options.scales?.x) {
        chart.options.scales.x.ticks.color = textColor;
        if (chart.options.scales.x.grid) chart.options.scales.x.grid.color = gridColor;
      }
      if (chart.options.scales?.y) {
        chart.options.scales.y.ticks.color = textColor;
        if (chart.options.scales.y.grid) chart.options.scales.y.grid.color = gridColor;
      }
      if (chart.options.plugins?.legend?.labels) {
        chart.options.plugins.legend.labels.color = textColor;
      }
      chart.update();
    });
  }

  // ─── SEARCH ───
  const searchInput = $('#searchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    // Search clients
    const match = clients.find(c => c.name.toLowerCase().includes(query));
    if (match) {
      switchPage('clients');
      setTimeout(() => {
        const card = document.querySelector(`.client-card[data-id="${match.id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.boxShadow = '0 0 0 2px var(--accent)';
          setTimeout(() => { card.style.boxShadow = ''; }, 2000);
        }
      }, 100);
    }

    // Search workouts
    const wMatch = workouts.find(w => w.name.toLowerCase().includes(query));
    if (wMatch && !match) {
      switchPage('workouts');
    }
  });

  // ─── INTERSECTION OBSERVER FOR ANIMATIONS ───
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    $$('[data-animate]').forEach(el => observer.observe(el));
  }

  // ─── INIT ───
  function init() {
    setTodayDate();
    renderTodaySchedule();
    renderActivityFeed();
    renderClients('all');
    renderCalendar();
    renderWorkouts('all');
    renderNotifications();
    renderTransactions();
    renderMilestones();
    renderLeaderboard();
    renderProgressClientOptions();

    initSessionsChart();
    initClientActivityChart();

    initAnimations();

    // Animate stat counters on load
    setTimeout(() => {
      $$('.stat-value[data-count]').forEach(el => animateCounter(el));
    }, 200);

    // Trigger entrance animations
    setTimeout(() => {
      $$('#page-dashboard [data-animate]').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 80 * i);
      });
    }, 100);
  }

  init();
})();
