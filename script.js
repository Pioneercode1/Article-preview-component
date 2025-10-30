// script.js
const btnShare = document.getElementById('btn-share');
const mobileTooltip = document.getElementById('share-tooltip');
const desktopTooltip = document.getElementById('share-tooltip-desktop');

const mqDesktop = window.matchMedia('(min-width: 1440px)');

function isDesktop() {
  return mqDesktop.matches;
}

function openMobileTooltip() {
  mobileTooltip.classList.remove('share-component-none');
  mobileTooltip.classList.add('share-component-block');
  mobileTooltip.setAttribute('aria-hidden', 'false');
  btnShare.setAttribute('aria-expanded', 'true');
  // Scroll into view to ensure it's visible on small screens
  mobileTooltip.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function closeMobileTooltip() {
  mobileTooltip.classList.remove('share-component-block');
  mobileTooltip.classList.add('share-component-none');
  mobileTooltip.setAttribute('aria-hidden', 'true');
  btnShare.setAttribute('aria-expanded', 'false');
}

function openDesktopTooltip() {
  desktopTooltip.classList.remove('share-component-desktop-hidden');
  desktopTooltip.classList.add('share-component-desktop-visible');
  desktopTooltip.setAttribute('aria-hidden', 'false');
  btnShare.setAttribute('aria-expanded', 'true');
}

function closeDesktopTooltip() {
  desktopTooltip.classList.remove('share-component-desktop-visible');
  desktopTooltip.classList.add('share-component-desktop-hidden');
  desktopTooltip.setAttribute('aria-hidden', 'true');
  btnShare.setAttribute('aria-expanded', 'false');
}

function toggleShare() {
  if (isDesktop()) {
    const visible = !desktopTooltip.classList.contains('share-component-desktop-hidden');
    if (visible) closeDesktopTooltip();
    else openDesktopTooltip();
  } else {
    const visible = !mobileTooltip.classList.contains('share-component-none');
    if (visible) closeMobileTooltip();
    else openMobileTooltip();
  }
}

// Click outside to close (works for both)
function handleDocumentClick(e) {
  const target = e.target;
  if (isDesktop()) {
    if (!desktopTooltip.contains(target) && !btnShare.contains(target)) {
      closeDesktopTooltip();
    }
  } else {
    if (!mobileTooltip.contains(target) && !btnShare.contains(target)) {
      closeMobileTooltip();
    }
  }
}

// Close on Escape
function handleKeyDown(e) {
  if (e.key === 'Escape') {
    closeMobileTooltip();
    closeDesktopTooltip();
  }
}

// When screen size changes, ensure tooltip state is consistent
function handleMediaChange() {
  // always close both (safer) when switching modes
  closeMobileTooltip();
  closeDesktopTooltip();
}

// Attach events
btnShare.addEventListener('click', toggleShare);
document.addEventListener('click', handleDocumentClick);
document.addEventListener('keydown', handleKeyDown);
mqDesktop.addEventListener('change', handleMediaChange);