/**
 * Budgie Desktop Preview — interactive shell
 * Layout from budgie-desktop panel.ini, Budgie Menu, Raven, Status applet
 * Theme colors from budgie-desktop internal SCSS (#6bca81 accent, #161616 panel)
 * File manager: Nemo (Ubuntu Budgie default)
 * Layouts: Traditional (bottom panel), Unity-like (top + left), macOS-like / Cupertino (top + dock)
 */

/* ---------- App / category data (Budgie AppIndex categories) ---------- */

const CATEGORIES = [
  { id: "all", name: "All Applications", icon: "grid" },
  { id: "accessories", name: "Accessories", icon: "assets/menu/applications-accessories.svg" },
  { id: "education", name: "Education", icon: "assets/menu/applications-other.svg" },
  { id: "games", name: "Games", icon: "assets/menu/applications-games.png" },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.svg" },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.svg" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.svg" },
  { id: "programming", name: "Programming", icon: "assets/menu/applications-development.png" },
  { id: "science", name: "Science", icon: "assets/menu/applications-science.svg" },
  { id: "multimedia", name: "Sound & Video", icon: "assets/menu/applications-multimedia.svg" },
  { id: "system", name: "System Tools", icon: "assets/menu/applications-system.svg" },
  { id: "a11y", name: "Universal Access", icon: "assets/menu/preferences-desktop-accessibility.png" },
];

const APPS = [
  {
    id: "files",
    name: "Files",
    desc: "Access and organize files",
    icon: "assets/apps/nemo.png",
    categories: ["accessories", "all"],
  },
  {
    id: "firefox",
    name: "Firefox Web Browser",
    desc: "Browse the World Wide Web",
    icon: "assets/apps/firefox.svg",
    categories: ["internet", "all"],
  },
  {
    id: "terminal",
    name: "Terminal",
    desc: "Use the command line",
    icon: "assets/apps/utilities-terminal.png",
    categories: ["accessories", "system", "all"],
  },
  {
    id: "settings",
    name: "Budgie Control Center",
    desc: "System settings",
    icon: "assets/apps/org.gnome.Settings.png",
    categories: ["system", "all"],
  },
  {
    id: "texteditor",
    name: "Text Editor",
    desc: "Edit text files",
    icon: "assets/apps/org.gnome.TextEditor.png",
    categories: ["accessories", "all"],
  },
  {
    id: "calculator",
    name: "Calculator",
    desc: "Perform calculations",
    icon: "assets/apps/org.gnome.Calculator.png",
    categories: ["accessories", "all"],
  },
  {
    id: "calendar",
    name: "Calendar",
    desc: "Calendar application",
    icon: "assets/apps/calendar.svg",
    categories: ["office", "all"],
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    desc: "The office productivity suite",
    icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png",
    categories: ["office", "all"],
  },
  {
    id: "writer",
    name: "LibreOffice Writer",
    desc: "Create and edit text documents",
    icon: "assets/apps/org.libreoffice.LibreOffice.writer.png",
    categories: ["office", "all"],
  },
  {
    id: "calc",
    name: "LibreOffice Calc",
    desc: "Perform calculations, analyze information",
    icon: "assets/apps/org.libreoffice.LibreOffice.calc.png",
    categories: ["office", "all"],
  },
  {
    id: "impress",
    name: "LibreOffice Impress",
    desc: "Create and edit presentations",
    icon: "assets/apps/org.libreoffice.LibreOffice.impress.png",
    categories: ["office", "all"],
  },
  {
    id: "draw",
    name: "LibreOffice Draw",
    desc: "Create and edit drawings",
    icon: "assets/apps/org.libreoffice.LibreOffice.draw.png",
    categories: ["office", "graphics", "all"],
  },
  {
    id: "eog",
    name: "Image Viewer",
    desc: "Browse and rotate images",
    icon: "assets/apps/org.gnome.eog.png",
    categories: ["graphics", "all"],
  },
  {
    id: "video",
    name: "Videos",
    desc: "Play movies",
    icon: "assets/apps/video-player.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "music",
    name: "Music",
    desc: "Play and organize music",
    icon: "assets/apps/audio-player.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "contacts",
    name: "Contacts",
    desc: "Manage your contacts",
    icon: "assets/apps/org.gnome.Contacts.png",
    categories: ["office", "all"],
  },
  {
    id: "software",
    name: "Software",
    desc: "Install and manage applications",
    icon: "assets/apps/software-manager.svg",
    categories: ["system", "all"],
  },
];

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.png",
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.png", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.png", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.png", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.png", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.png", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.png", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.png", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.png", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/user-desktop.png",
    items: [
      { name: "Home", icon: "assets/places/user-home.png", type: "folder", place: "home", size: "—", modified: "Today" },
    ],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.png",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.png", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", type: "file", size: "48 kB", modified: "Yesterday" },
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 kB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.png",
    items: [
      { name: "budgie-desktop.iso", icon: "assets/places/drive-harddisk.png", type: "file", size: "2.6 GB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.png", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.png",
    items: [
      { name: "Playlist", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "1 Jun 2026" },
    ],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.png",
    items: [
      { name: "Vacation", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.png",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.png",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.png",
    items: [],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.png",
    items: [],
  },
};

const SIDEBAR_PLACES = [
  { id: "home", label: "Home", icon: "assets/places/user-home.png" },
  { id: "desktop", label: "Desktop", icon: "assets/places/user-desktop.png" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents.png" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download.png" },
  { id: "music", label: "Music", icon: "assets/places/folder-music.png" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures.png" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos.png" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.png" },
];

/* ---------- DOM ---------- */

const desktop = document.getElementById("desktop");
const menuBtn = document.getElementById("menu-btn");
const budgieMenu = document.getElementById("budgie-menu");
const menuSearch = document.getElementById("menu-search");
const menuCategories = document.getElementById("menu-categories");
const menuApps = document.getElementById("menu-apps");
const menuEmpty = document.getElementById("menu-empty");
const menuPowerBtn = document.getElementById("menu-power-btn");
const powerDialog = document.getElementById("power-dialog");

const clockBtn = document.getElementById("clock-btn");
const clockText = document.getElementById("clock-text");

const soundBtn = document.getElementById("sound-btn");
const soundPopover = document.getElementById("sound-popover");
const volumeSlider = document.getElementById("volume-slider");
const volumePct = document.getElementById("volume-pct");
const ravenVolume = document.getElementById("raven-volume");
const ravenVolumePct = document.getElementById("raven-volume-pct");
const ravenMic = document.getElementById("raven-mic");
const ravenMicPct = document.getElementById("raven-mic-pct");

const netBtn = document.getElementById("net-btn");
const netPopover = document.getElementById("net-popover");
const battBtn = document.getElementById("batt-btn");
const battPopover = document.getElementById("batt-popover");
const notifBtn = document.getElementById("notif-btn");
const ravenBtn = document.getElementById("raven-btn");
const raven = document.getElementById("raven");
const ravenTriggerIcon = document.getElementById("raven-trigger-icon");

const taskFiles = document.getElementById("task-files");
const layoutChooser = document.getElementById("layout-chooser");
const panelTop = document.getElementById("panel-top");
const panelLeft = document.getElementById("panel-left");
const panelBottom = document.getElementById("panel-bottom");
const panelTopStart = document.getElementById("panel-top-start");
const panelTopEnd = document.getElementById("panel-top-end");
const panelLeftInner = document.getElementById("panel-left-inner");
const panelBottomStart = document.getElementById("panel-bottom-start");
const panelBottomCenter = document.getElementById("panel-bottom-center");
const panelBottomEnd = document.getElementById("panel-bottom-end");
const iconTasklist = document.getElementById("icon-tasklist");
const systemTray = document.getElementById("system-tray");
const statusApplet = document.getElementById("status-applet");
const nemoWindow = document.getElementById("nemo-window");
const nemoClose = document.getElementById("nemo-close");
const nemoTitle = document.getElementById("nemo-title");
const nemoTitleIcon = document.getElementById("nemo-title-icon");
const nemoPathLabel = document.getElementById("nemo-path-label");
const nemoContent = document.getElementById("nemo-content");
const nemoSidebar = document.getElementById("nemo-sidebar");
const nemoStatus = document.getElementById("nemo-status");
const nemoSearchBtn = document.getElementById("nemo-search-btn");
const nemoSearchBar = document.getElementById("nemo-search-bar");
const nemoSearchInput = document.getElementById("nemo-search-input");
const nemoViewIcons = document.getElementById("nemo-view-icons");
const nemoViewList = document.getElementById("nemo-view-list");
const nemoBack = document.getElementById("nemo-back");
const nemoForward = document.getElementById("nemo-forward");
const nemoUp = document.getElementById("nemo-up");
const rcGrid = document.getElementById("rc-grid");
const rcMonthLabel = document.getElementById("rc-month-label");
const rcPrev = document.getElementById("rc-prev");
const rcNext = document.getElementById("rc-next");

let selectedCategory = "all";
let viewYear;
let viewMonth;
let nemoPlace = "home";
let nemoHistory = ["home"];
let nemoHistIndex = 0;
let nemoViewMode = "icons";
let ravenOpen = false;
let ravenTab = "widgets";
let currentLayout = "traditional";

/* ---------- Layout switching ---------- */

const LAYOUT_CLASSES = ["layout-traditional", "layout-unity", "layout-cupertino"];

function placeApplets(layout) {
  // Shared status strip (tray → notifications → status → clock → raven)
  const endStrip = [systemTray, notifBtn, statusApplet, clockBtn, ravenBtn];

  if (layout === "traditional") {
    panelBottomStart.appendChild(menuBtn);
    panelBottomStart.appendChild(iconTasklist);
    endStrip.forEach((el) => panelBottomEnd.appendChild(el));
    iconTasklist.classList.remove("vertical");
  } else if (layout === "unity") {
    panelTopStart.appendChild(menuBtn);
    endStrip.forEach((el) => panelTopEnd.appendChild(el));
    panelLeftInner.appendChild(iconTasklist);
    iconTasklist.classList.add("vertical");
  } else if (layout === "cupertino") {
    panelTopStart.appendChild(menuBtn);
    endStrip.forEach((el) => panelTopEnd.appendChild(el));
    panelBottomCenter.appendChild(iconTasklist);
    iconTasklist.classList.remove("vertical");
  }
}

function setLayout(layout) {
  if (!["traditional", "unity", "cupertino"].includes(layout)) layout = "traditional";
  currentLayout = layout;

  desktop.classList.remove(...LAYOUT_CLASSES);
  desktop.classList.add(`layout-${layout}`);
  desktop.dataset.layout = layout;

  // Visibility of panel shells
  if (layout === "traditional") {
    panelTop.hidden = true;
    panelLeft.hidden = true;
    panelBottom.hidden = false;
  } else if (layout === "unity") {
    panelTop.hidden = false;
    panelLeft.hidden = false;
    panelBottom.hidden = true;
  } else {
    // cupertino
    panelTop.hidden = false;
    panelLeft.hidden = true;
    panelBottom.hidden = false;
  }

  placeApplets(layout);
  closeAll();

  // Chooser active state
  layoutChooser.querySelectorAll(".layout-opt").forEach((btn) => {
    const active = btn.dataset.layout === layout;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem("budgie-preview-layout", layout);
  } catch {
    /* ignore */
  }
}

/* ---------- Clock (Budgie: bold, date + time) ---------- */

function formatPanelClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${weekday} ${time}`;
}

function tickClock() {
  clockText.textContent = formatPanelClock(new Date());
}

tickClock();
setInterval(tickClock, 15_000);

/* ---------- Raven calendar ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function buildRavenCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  const labelDate = new Date(viewYear, viewMonth, 1);
  rcMonthLabel.textContent = labelDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  rcGrid.innerHTML = "";
  const TOTAL = 42;

  for (let i = 0; i < TOTAL; i++) {
    const dayOffset = i - firstDow;
    const el = document.createElement("div");

    if (dayOffset < 0) {
      el.className = "rc-day muted";
      el.textContent = String(daysInPrev + dayOffset + 1);
    } else if (dayOffset < daysInMonth) {
      const d = dayOffset + 1;
      const isToday = d === todayD && viewMonth === todayM && viewYear === todayY;
      el.className = "rc-day" + (isToday ? " today" : "");
      el.textContent = String(d);
    } else {
      el.className = "rc-day muted";
      el.textContent = String(dayOffset - daysInMonth + 1);
    }
    rcGrid.appendChild(el);
  }
}

setViewToToday();
buildRavenCalendar();

rcPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildRavenCalendar();
});

rcNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildRavenCalendar();
});

/* ---------- Menu ---------- */

function catIconHtml(cat) {
  if (cat.icon === "grid") {
    return `<span class="cat-glyph" aria-hidden="true">▦</span>`;
  }
  return `<img src="${cat.icon}" alt="" draggable="false" />`;
}

function renderCategories() {
  menuCategories.innerHTML = "";
  for (const cat of CATEGORIES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-cat" + (cat.id === selectedCategory ? " selected" : "");
    btn.dataset.category = cat.id;
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `${catIconHtml(cat)}<span>${cat.name}</span>`;
    // Budgie default: menu-categories-hover — switch on hover
    btn.addEventListener("mouseenter", () => {
      if (menuSearch.value.trim()) return;
      selectCategory(cat.id);
    });
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectCategory(cat.id);
    });
    menuCategories.appendChild(btn);
  }
}

function selectCategory(id) {
  selectedCategory = id;
  menuCategories.querySelectorAll(".menu-cat").forEach((el) => {
    el.classList.toggle("selected", el.dataset.category === id);
  });
  renderMenuApps();
}

function getAppsForCategory(catId, filter = "") {
  const q = filter.trim().toLowerCase();
  let list = APPS.filter((a) => a.categories.includes(catId === "all" ? "all" : catId));
  if (q) {
    list = APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    );
  }
  return list;
}

function renderMenuApps(filter) {
  const q = filter !== undefined ? filter : menuSearch.value;
  const list = getAppsForCategory(selectedCategory, q);

  menuApps.innerHTML = "";
  menuEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-app";
    btn.setAttribute("role", "listitem");
    btn.title = app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="menu-app-text">
        <span class="menu-app-name">${app.name}</span>
        ${app.desc ? `<span class="menu-app-desc">${app.desc}</span>` : ""}
      </span>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(app.id);
    });
    menuApps.appendChild(btn);
  }
}

function launchApp(id) {
  closeMenu();
  if (id === "files") {
    openNemo("home");
    return;
  }
  const panelApp = document.querySelector(`.task-btn[data-app="${id}"]`);
  if (panelApp) {
    panelApp.classList.add("running");
    setTimeout(() => {
      if (id !== "files") panelApp.classList.remove("running");
    }, 500);
  }
}

function setExpanded(btn, open) {
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeMenu() {
  budgieMenu.hidden = true;
  setExpanded(menuBtn, false);
  desktop.classList.remove("menu-open");
  menuSearch.value = "";
  selectedCategory = "all";
  renderCategories();
  renderMenuApps("");
}

function openMenu() {
  closeStatusPopovers();
  closePowerDialog();
  budgieMenu.hidden = false;
  setExpanded(menuBtn, true);
  desktop.classList.add("menu-open");
  selectedCategory = "all";
  renderCategories();
  renderMenuApps("");
  requestAnimationFrame(() => menuSearch.focus());
}

function toggleMenu() {
  if (budgieMenu.hidden) openMenu();
  else closeMenu();
}

function closeStatusPopovers() {
  soundPopover.hidden = true;
  netPopover.hidden = true;
  battPopover.hidden = true;
  setExpanded(soundBtn, false);
  setExpanded(netBtn, false);
  setExpanded(battBtn, false);
}

function closePowerDialog() {
  powerDialog.hidden = true;
}

function closeAll() {
  closeMenu();
  closeStatusPopovers();
  closePowerDialog();
}

function togglePopover(popover, btn) {
  const wasOpen = !popover.hidden;
  closeMenu();
  closeStatusPopovers();
  closePowerDialog();
  if (!wasOpen) {
    popover.hidden = false;
    setExpanded(btn, true);
  }
}

/* ---------- Raven ---------- */

function openRaven(tab = "widgets") {
  closeMenu();
  closeStatusPopovers();
  raven.hidden = false;
  ravenOpen = true;
  setExpanded(ravenBtn, true);
  desktop.classList.add("raven-open");
  ravenTriggerIcon.src = "assets/status/pane-hide-symbolic.svg";
  setRavenTab(tab);
  if (tab === "widgets") {
    setViewToToday();
    buildRavenCalendar();
  }
}

function closeRaven() {
  raven.hidden = true;
  ravenOpen = false;
  setExpanded(ravenBtn, false);
  desktop.classList.remove("raven-open");
  ravenTriggerIcon.src = "assets/status/pane-show-symbolic.svg";
}

function toggleRaven(tab) {
  if (ravenOpen) {
    if (tab && tab !== ravenTab) {
      setRavenTab(tab);
      return;
    }
    closeRaven();
  } else {
    openRaven(tab || "widgets");
  }
}

function setRavenTab(tab) {
  ravenTab = tab;
  document.querySelectorAll(".raven-tab").forEach((el) => {
    const active = el.dataset.tab === tab;
    el.classList.toggle("active", active);
    el.setAttribute("aria-selected", active ? "true" : "false");
  });
  document.getElementById("raven-widgets").hidden = tab !== "widgets";
  document.getElementById("raven-notifications").hidden = tab !== "notifications";
}

document.querySelectorAll(".raven-tab").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.stopPropagation();
    setRavenTab(tab.dataset.tab);
  });
});

/* ---------- Nemo ---------- */

function parentPlace(place) {
  if (place === "home" || place === "trash") return null;
  return "home";
}

function updateNavButtons() {
  nemoBack.disabled = nemoHistIndex <= 0;
  nemoForward.disabled = nemoHistIndex >= nemoHistory.length - 1;
  nemoUp.disabled = !parentPlace(nemoPlace);
}

function renderSidebar() {
  nemoSidebar.innerHTML = "";
  const label = document.createElement("div");
  label.className = "sidebar-label";
  label.textContent = "Places";
  nemoSidebar.appendChild(label);

  for (const p of SIDEBAR_PLACES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sidebar-item" + (p.id === nemoPlace ? " active" : "");
    btn.innerHTML = `<img src="${p.icon}" alt="" draggable="false" /><span>${p.label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateNemo(p.id, true);
    });
    nemoSidebar.appendChild(btn);
  }
}

function renderNemoContent(filter = "") {
  const folder = FS[nemoPlace] || FS.home;
  let items = folder.items || [];
  const q = filter.trim().toLowerCase();
  if (q) items = items.filter((i) => i.name.toLowerCase().includes(q));

  // Keep list header for list view
  const header = nemoContent.querySelector(".nemo-list-header");
  nemoContent.innerHTML = "";
  if (header) nemoContent.appendChild(header);
  else {
    const h = document.createElement("div");
    h.className = "nemo-list-header";
    h.setAttribute("aria-hidden", "true");
    h.innerHTML = "<span></span><span>Name</span><span>Size</span><span>Modified</span>";
    nemoContent.appendChild(h);
  }

  nemoContent.classList.toggle("view-icons", nemoViewMode === "icons");
  nemoContent.classList.toggle("view-list", nemoViewMode === "list");

  for (const item of items) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "nemo-item";
    el.setAttribute("role", "listitem");
    el.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <span class="nemo-item-name">${item.name}</span>
      <span class="nemo-item-meta">
        <span class="nemo-item-size">${item.size || "—"}</span>
        <span class="nemo-item-date">${item.modified || "—"}</span>
      </span>
    `;
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      nemoContent.querySelectorAll(".nemo-item").forEach((n) => n.classList.remove("selected"));
      el.classList.add("selected");
    });
    el.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      if (item.type === "folder" && item.place) {
        navigateNemo(item.place, true);
      }
    });
    nemoContent.appendChild(el);
  }

  const n = items.length;
  nemoStatus.textContent = n === 1 ? "1 item" : `${n} items`;
}

function navigateNemo(place, pushHistory) {
  if (!FS[place]) place = "home";
  nemoPlace = place;
  if (pushHistory) {
    nemoHistory = nemoHistory.slice(0, nemoHistIndex + 1);
    nemoHistory.push(place);
    nemoHistIndex = nemoHistory.length - 1;
  }
  const folder = FS[place];
  nemoTitle.textContent = folder.label;
  nemoTitleIcon.src = folder.icon;
  nemoPathLabel.textContent = folder.label;
  nemoWindow.setAttribute("aria-label", folder.label);
  renderSidebar();
  renderNemoContent(nemoSearchInput.value);
  updateNavButtons();
  updateTasklist();
}

function openNemo(place) {
  nemoWindow.hidden = false;
  nemoHistory = [place || "home"];
  nemoHistIndex = 0;
  navigateNemo(place || "home", false);
  updateTasklist();
}

function closeNemo() {
  nemoWindow.hidden = true;
  nemoWindow.classList.remove("maximized");
  updateTasklist();
}

function updateTasklist() {
  if (nemoWindow.hidden) {
    taskFiles.classList.remove("running", "active");
  } else {
    taskFiles.classList.add("running", "active");
  }
}

/* ---------- Volume sync ---------- */

function setVolume(val) {
  const v = Math.max(0, Math.min(100, Number(val)));
  volumeSlider.value = v;
  ravenVolume.value = v;
  volumePct.textContent = `${v}%`;
  ravenVolumePct.textContent = `${v}%`;
}

volumeSlider.addEventListener("input", () => setVolume(volumeSlider.value));
ravenVolume.addEventListener("input", () => setVolume(ravenVolume.value));
ravenMic.addEventListener("input", () => {
  ravenMicPct.textContent = `${ravenMic.value}%`;
});

/* ---------- Event wiring ---------- */

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

menuSearch.addEventListener("input", () => {
  renderMenuApps(menuSearch.value);
});

menuSearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  } else if (e.key === "Enter") {
    const first = menuApps.querySelector(".menu-app");
    if (first) first.click();
  }
});

menuPowerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
  powerDialog.hidden = false;
});

powerDialog.addEventListener("click", (e) => {
  if (e.target === powerDialog) closePowerDialog();
});

powerDialog.querySelectorAll(".power-dialog-item").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closePowerDialog();
  });
});

soundBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(soundPopover, soundBtn);
});

netBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(netPopover, netBtn);
});

battBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(battPopover, battBtn);
});

battPopover.querySelectorAll(".profile-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    battPopover.querySelectorAll(".profile-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Clock opens Raven widgets (calendar lives in Raven on Budgie)
clockBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openRaven("widgets");
});

// Notifications applet opens Raven notifications view
notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (ravenOpen && ravenTab === "notifications") closeRaven();
  else openRaven("notifications");
});

ravenBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleRaven("widgets");
});

// Icon tasklist
document.querySelectorAll(".task-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const app = btn.dataset.app;
    if (app === "files") {
      if (nemoWindow.hidden) openNemo("home");
      else {
        // focus / unminimize
        nemoWindow.hidden = false;
        updateTasklist();
      }
    } else {
      launchApp(app);
    }
  });
});

// Desktop icons
document.querySelectorAll(".desk-icon").forEach((btn) => {
  btn.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    openNemo(btn.dataset.place || "home");
  });
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".desk-icon").forEach((d) => d.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

// Nemo controls
nemoClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeNemo();
});

nemoWindow.querySelector(".nemo-max")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.classList.toggle("maximized");
});

nemoWindow.querySelector(".nemo-min")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.hidden = true;
  updateTasklist();
});

nemoBack.addEventListener("click", (e) => {
  e.stopPropagation();
  if (nemoHistIndex > 0) {
    nemoHistIndex -= 1;
    navigateNemo(nemoHistory[nemoHistIndex], false);
  }
});

nemoForward.addEventListener("click", (e) => {
  e.stopPropagation();
  if (nemoHistIndex < nemoHistory.length - 1) {
    nemoHistIndex += 1;
    navigateNemo(nemoHistory[nemoHistIndex], false);
  }
});

nemoUp.addEventListener("click", (e) => {
  e.stopPropagation();
  const parent = parentPlace(nemoPlace);
  if (parent) navigateNemo(parent, true);
});

nemoSearchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = nemoSearchBar.hidden;
  nemoSearchBar.hidden = !open;
  nemoSearchBtn.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) {
    nemoSearchInput.focus();
  } else {
    nemoSearchInput.value = "";
    renderNemoContent("");
  }
});

nemoSearchInput.addEventListener("input", () => {
  renderNemoContent(nemoSearchInput.value);
});

nemoViewIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoViewMode = "icons";
  nemoViewIcons.classList.add("active");
  nemoViewIcons.setAttribute("aria-pressed", "true");
  nemoViewList.classList.remove("active");
  nemoViewList.setAttribute("aria-pressed", "false");
  renderNemoContent(nemoSearchInput.value);
});

nemoViewList.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoViewMode = "list";
  nemoViewList.classList.add("active");
  nemoViewList.setAttribute("aria-pressed", "true");
  nemoViewIcons.classList.remove("active");
  nemoViewIcons.setAttribute("aria-pressed", "false");
  renderNemoContent(nemoSearchInput.value);
});

// Layout chooser
layoutChooser.querySelectorAll(".layout-opt").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setLayout(btn.dataset.layout);
  });
});

layoutChooser.addEventListener("click", (e) => e.stopPropagation());

// Stop propagation so clicks inside UI don't close everything
for (const el of [
  budgieMenu,
  soundPopover,
  netPopover,
  battPopover,
  raven,
  nemoWindow,
  panelTop,
  panelLeft,
  panelBottom,
  powerDialog.querySelector(".power-dialog-card"),
]) {
  el?.addEventListener("click", (e) => e.stopPropagation());
}

desktop.addEventListener("click", () => {
  closeAll();
  document.querySelectorAll(".desk-icon").forEach((d) => d.classList.remove("selected"));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!powerDialog.hidden) {
      closePowerDialog();
      return;
    }
    if (!budgieMenu.hidden) {
      closeMenu();
      return;
    }
    if (!soundPopover.hidden || !netPopover.hidden || !battPopover.hidden) {
      closeStatusPopovers();
      return;
    }
    if (ravenOpen) {
      closeRaven();
      return;
    }
    if (!nemoWindow.hidden) {
      closeNemo();
    }
  }
  // Super+N style: Alt+N toggles Raven (browser can't use Super cleanly)
  if (e.altKey && e.key.toLowerCase() === "n") {
    e.preventDefault();
    toggleRaven();
  }
});

// Initial render
renderCategories();
renderMenuApps("");
renderSidebar();

// Restore layout preference (default: traditional)
let initialLayout = "traditional";
try {
  const saved = localStorage.getItem("budgie-preview-layout");
  if (saved) initialLayout = saved;
} catch {
  /* ignore */
}
setLayout(initialLayout);
