function updatePageTitle() {
  // Get language from localStorage, fallback to select value, then default to 'fa'
  let lang = localStorage.getItem('language') || (document.getElementById('language') ? document.getElementById('language').value : 'fa');
  
  // Get the current page from URL
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop().split('\\').pop() || 'dashboard.html'; // Handle both / and \ for file:// protocol
  
  // Debug logs to check values
  console.log('Current Path:', currentPath);
  console.log('Current Page:', currentPage);
  console.log('Language:', lang);

  const translations = {
    fa: {
      'page-title': {
        'login.html': 'ورود/ثبت‌نام',
        'dashboard.html': 'داشبورد',
        'editor.html': 'طراحی قالب',
        'gallery.html': 'گالری تمپلیت‌ها',
        'integrations.html': 'اتصال ایمیل',
        'settings.html': 'تنظیمات',
        'profile.html': 'پروفایل',
      },
      'dashboard-title': 'داشبورد',
      'editor-title': 'طراحی قالب',
      'gallery-title': 'گالری تمپلیت‌ها',
      'integrations-title': 'اتصال ایمیل',
      'settings-title': 'تنظیمات',
      'profile-title': 'پروفایل',
      'dashboard-menu': 'داشبورد',
      'editor-menu': 'طراحی قالب',
      'gallery-menu': 'گالری تمپلیت‌ها',
      'integrations-menu': 'اتصال ایمیل',
      'settings-menu': 'تنظیمات',
      'profile-link': 'پروفایل',
      'logout-link': 'خروج',
      'stats-templates': 'تعداد تمپلیت‌ها: 10',
      'stats-emails': 'ایمیل‌های ارسالی: 150',
      'stats-open-rate': 'نرخ باز شدن: 65%',
      'create-template-btn': 'ایجاد قالب جدید',
      'view-gallery-btn': 'مشاهده گالری',
      'connect-service-btn': 'اتصال سرویس جدید',
      'recent-activity-title': 'فعالیت‌های اخیر',
      'campaign-reports-title': 'گزارش کمپین‌ها',
      'select-template-btn': 'انتخاب تمپلیت',
      'integrations-desc': 'اتصال به سرویس‌های ایمیل',
      'settings-fonts-label': 'فونت‌های سفارشی',
      'upload-font': 'آپلود فونت',
      'settings-colors-label': 'پالت رنگی',
      'settings-language-label': 'زبان پیش‌فرض',
      'settings-email-notifications-label': 'اعلان‌های ایمیل',
      'settings-campaign-notifications-label': 'اعلان‌های کمپین',
      'settings-api-key-label': 'کلید API پیش‌فرض',
      'elements-title': 'المان‌ها',
      'drag-here': 'المان‌ها را اینجا بکشید',
      'preview-title': 'پیش‌نمایش',
      'search-template': 'جستجوی تمپلیت...',
      'category-filter-all': 'همه',
      'category-filter-promotional': 'تبلیغاتی',
      'category-filter-onboarding': 'خوش‌آمدگویی',
      'category-filter-newsletter': 'خبرنامه',
      'category-filter-event': 'رویداد',
      'category-filter-transactional': 'تراکنشی',
      'sort-filter-newest': 'جدیدترین',
      'sort-filter-popular': 'محبوب',
      'sort-filter-alphabetical': 'الفبایی',
      'generate-template-btn': 'تولید قالب هوشمند',
      'suggest-content-btn': 'پیشنهاد محتوا',
      'spam-analysis-btn': 'تحلیل اسپم',
      'image-edit-btn': 'ویرایش تصویر پیشرفته',
      'branding-btn': 'برندینگ هوشمند',
      'save-btn': 'ذخیره',
      'export-html-btn': 'Export HTML',
      'preview-mode-desktop': 'Desktop',
      'preview-mode-tablet': 'Tablet',
      'preview-mode-mobile': 'Mobile',
      'multi-preview-btn': 'پیش‌نمایش چندگانه',
      'header-menu-dashboard': 'داشبورد',
      'header-menu-editor': 'طراحی قالب',
      'header-menu-gallery': 'گالری تمپلیت‌ها',
      'header-menu-integrations': 'اتصال ایمیل',
      'header-menu-settings': 'تنظیمات'
    },
    en: {
      'page-title': {
        'login.html': 'Login/Signup',
        'dashboard.html': 'Dashboard',
        'editor.html': 'Template Editor',
        'gallery.html': 'Template Gallery',
        'integrations.html': 'Email Integrations',
        'settings.html': 'Settings',
        'profile.html': 'Profile',
      },
      'dashboard-title': 'Dashboard',
      'editor-title': 'Template Editor',
      'gallery-title': 'Template Gallery',
      'integrations-title': 'Email Integrations',
      'settings-title': 'Settings',
      'profile-title': 'Profile',
      'dashboard-menu': 'Dashboard',
      'editor-menu': 'Template Editor',
      'gallery-menu': 'Template Gallery',
      'integrations-menu': 'Email Integrations',
      'settings-menu': 'Settings',
      'profile-link': 'Profile',
      'logout-link': 'Logout',
      'stats-templates': 'Number of Templates: 10',
      'stats-emails': 'Emails Sent: 150',
      'stats-open-rate': 'Open Rate: 65%',
      'create-template-btn': 'Create New Template',
      'view-gallery-btn': 'View Gallery',
      'connect-service-btn': 'Connect New Service',
      'recent-activity-title': 'Recent Activity',
      'campaign-reports-title': 'Campaign Reports',
      'select-template-btn': 'Select Template',
      'integrations-desc': 'Connect to email services',
      'settings-fonts-label': 'Custom Fonts',
      'upload-font': 'Upload Font',
      'settings-colors-label': 'Color Palette',
      'settings-language-label': 'Default Language',
      'settings-email-notifications-label': 'Email Notifications',
      'settings-campaign-notifications-label': 'Campaign Notifications',
      'settings-api-key-label': 'Default API Key',
      'elements-title': 'Elements',
      'drag-here': 'Drag elements here',
      'preview-title': 'Preview',
      'search-template': 'Search templates...',
      'category-filter-all': 'All',
      'category-filter-promotional': 'Promotional',
      'category-filter-onboarding': 'Onboarding',
      'category-filter-newsletter': 'Newsletter',
      'category-filter-event': 'Event',
      'category-filter-transactional': 'Transactional',
      'sort-filter-newest': 'Newest',
      'sort-filter-popular': 'Popular',
      'sort-filter-alphabetical': 'Alphabetical',
      'generate-template-btn': 'Smart Template Generation',
      'suggest-content-btn': 'Content Suggestions',
      'spam-analysis-btn': 'Spam Analysis',
      'image-edit-btn': 'Advanced Image Editing',
      'branding-btn': 'Smart Branding',
      'save-btn': 'Save',
      'export-html-btn': 'Export HTML',
      'preview-mode-desktop': 'Desktop',
      'preview-mode-tablet': 'Tablet',
      'preview-mode-mobile': 'Mobile',
      'multi-preview-btn': 'Multi-Device Preview',
      'header-menu-dashboard': 'Dashboard',
      'header-menu-editor': 'Template Editor',
      'header-menu-gallery': 'Template Gallery',
      'header-menu-integrations': 'Email Integrations',
      'header-menu-settings': 'Settings'
    }
  };

  let pageTitle = translations[lang]['page-title'][currentPage] || translations[lang]['page-title']['dashboard.html'];
  
  // Debug log for pageTitle
  console.log('Page Title:', pageTitle);

  // Ensure pageTitle is a string
  if (typeof pageTitle !== 'string') {
    pageTitle = lang === 'fa' ? 'داشبورد' : 'Dashboard'; // Hard fallback
    console.warn('Page title was not a string, using hard fallback:', pageTitle);
  }
  
  const pageTitleElement = document.getElementById('page-title');
  if (pageTitleElement) {
    pageTitleElement.textContent = pageTitle;
  } else {
    console.warn('Page title element not found');
  }

  // Update all elements with IDs
  const elements = document.querySelectorAll('[id]');
  elements.forEach(el => {
    const id = el.id;
    if (translations[lang][id]) {
      el.textContent = translations[lang][id];
    }
    if (id === 'search-template') {
      el.placeholder = translations[lang][id];
    }
  });

  // Update header menu items
  const headerMenuItems = document.querySelectorAll('.header-menu-item');
  headerMenuItems.forEach(item => {
    const href = item.getAttribute('href').split('/').pop();
    const pageKey = href || 'dashboard.html';
    const menuId = `header-menu-${pageKey.split('.')[0]}`;
    item.textContent = translations[lang][menuId] || item.textContent;
  });

  // Update select options for category-filter and sort-filter
  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter) {
    categoryFilter.innerHTML = `
      <option value="all">${translations[lang]['category-filter-all']}</option>
      <option value="promotional">${translations[lang]['category-filter-promotional']}</option>
      <option value="onboarding">${translations[lang]['category-filter-onboarding']}</option>
      <option value="newsletter">${translations[lang]['category-filter-newsletter']}</option>
      <option value="event">${translations[lang]['category-filter-event']}</option>
      <option value="transactional">${translations[lang]['category-filter-transactional']}</option>
    `;
  }

  const sortFilter = document.getElementById('sort-filter');
  if (sortFilter) {
    sortFilter.innerHTML = `
      <option value="newest">${translations[lang]['sort-filter-newest']}</option>
      <option value="popular">${translations[lang]['sort-filter-popular']}</option>
      <option value="alphabetical">${translations[lang]['sort-filter-alphabetical']}</option>
    `;
  }

  // Update preview-mode select options
  const previewMode = document.getElementById('preview-mode');
  if (previewMode) {
    previewMode.innerHTML = `
      <option value="desktop">${translations[lang]['preview-mode-desktop']}</option>
      <option value="tablet">${translations[lang]['preview-mode-tablet']}</option>
      <option value="mobile">${translations[lang]['preview-mode-mobile']}</option>
    `;
  }

  if (document.getElementById('upload-font')) {
    document.getElementById('upload-font').value = '';
    document.getElementById('upload-font').nextElementSibling.textContent = translations[lang]['upload-font'] || 'Upload Font';
  }
}

function changeLanguage() {
  const lang = document.getElementById('language').value;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  
  // Store language in localStorage
  localStorage.setItem('language', lang);
  
  updatePageTitle();
}

function toggleHeaderMenu() {
  const headerMenuContent = document.getElementById('header-menu-content');
  headerMenuContent.classList.toggle('active');
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  buttons[tabId === 'login' ? 0 : 1].classList.add('active');
}

function showModal(title, content) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = content;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = title.includes('هدف کمپین') || title.includes('متن خود') || title.includes('Enter campaign goal') || title.includes('Enter your text') ? 'block' : 'none';
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function showAIGenerateModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'تولید قالب هوشمند' : 'Smart Template Generation';
  document.getElementById('modal-body').innerHTML = `
    <label>${document.documentElement.lang === 'fa' ? 'هدف کمپین:' : 'Campaign Goal:'}</label>
    <select id="campaign-goal">
      <option value="sales">${document.documentElement.lang === 'fa' ? 'فروش' : 'Sales'}</option>
      <option value="welcome">${document.documentElement.lang === 'fa' ? 'خوش‌آمدگویی' : 'Welcome'}</option>
      <option value="event">${document.documentElement.lang === 'fa' ? 'رویداد' : 'Event'}</option>
    </select>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIContentModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'پیشنهاد محتوا' : 'Content Suggestions';
  document.getElementById('modal-body').innerHTML = `
    <label>${document.documentElement.lang === 'fa' ? 'نوع محتوا:' : 'Content Type:'}</label>
    <select id="content-type">
      <option value="header">${document.documentElement.lang === 'fa' ? 'هدر' : 'Header'}</option>
      <option value="body">${document.documentElement.lang === 'fa' ? 'بدنه' : 'Body'}</option>
      <option value="cta">${document.documentElement.lang === 'fa' ? 'دکمه فراخوان' : 'CTA'}</option>
    </select>
    <label>${document.documentElement.lang === 'fa' ? 'لحن:' : 'Tone:'}</label>
    <select id="content-tone">
      <option value="formal">${document.documentElement.lang === 'fa' ? 'رسمی' : 'Formal'}</option>
      <option value="friendly">${document.documentElement.lang === 'fa' ? 'دوستانه' : 'Friendly'}</option>
    </select>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAISpamAnalysisModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'تحلیل اسپم' : 'Spam Analysis';
  document.getElementById('modal-body').innerHTML = `
    <p>${document.documentElement.lang === 'fa' ? 'امتیاز اسپم: 3/10' : 'Spam Score: 3/10'}</p>
    <p>${document.documentElement.lang === 'fa' ? 'نکات بهبود:' : 'Improvement Tips:'}</p>
    <ul>
      <li>${document.documentElement.lang === 'fa' ? 'کاهش تعداد لینک‌ها' : 'Reduce the number of links'}</li>
      <li>${document.documentElement.lang === 'fa' ? 'استفاده از کلمات کمتر اسپمی' : 'Use fewer spammy words'}</li>
    </ul>
  `;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIImageEditModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'ویرایش تصویر پیشرفته' : 'Advanced Image Editing';
  document.getElementById('modal-body').innerHTML = `
    <label>${document.documentElement.lang === 'fa' ? 'آپلود تصویر:' : 'Upload Image:'}</label>
    <input type="file">
    <label>${document.documentElement.lang === 'fa' ? 'اقدام:' : 'Action:'}</label>
    <select id="image-action">
      <option value="crop">${document.documentElement.lang === 'fa' ? 'برش' : 'Crop'}</option>
      <option value="filter">${document.documentElement.lang === 'fa' ? 'فیلتر' : 'Filter'}</option>
      <option value="add-text">${document.documentElement.lang === 'fa' ? 'افزودن متن' : 'Add Text'}</option>
    </select>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIBrandingModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'برندینگ هوشمند' : 'Smart Branding';
  document.getElementById('modal-body').innerHTML = `
    <label>${document.documentElement.lang === 'fa' ? 'پالت رنگی پیشنهادی:' : 'Suggested Color Palette:'}</label>
    <input type="color" value="#52C41A">
    <input type="color" value="#FA8C16">
    <label>${document.documentElement.lang === 'fa' ? 'فونت پیشنهادی:' : 'Suggested Font:'}</label>
    <select>
      <option>Vazir</option>
      <option>Arial</option>
    </select>
    <p>${document.documentElement.lang === 'fa' ? 'پیش‌نمایش:' : 'Preview:'}</p>
    <div style="background-color: #52C41A; color: #FFFFFF; padding: 10px;">${document.documentElement.lang === 'fa' ? 'متن نمونه' : 'Sample Text'}</div>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showMultiPreviewModal() {
  updatePageTitle();
  document.getElementById('modal-title').textContent = document.documentElement.lang === 'fa' ? 'پیش‌نمایش چندگانه' : 'Multi-Device Preview';
  document.getElementById('modal-body').innerHTML = `
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <div style="width: 600px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>${document.documentElement.lang === 'fa' ? 'دسکتاپ' : 'Desktop'}</h4>
        <div id="preview-desktop">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
      <div style="width: 500px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>${document.documentElement.lang === 'fa' ? 'تبلت' : 'Tablet'}</h4>
        <div id="preview-tablet">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
      <div style="width: 375px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>${document.documentElement.lang === 'fa' ? 'موبایل' : 'Mobile'}</h4>
        <div id="preview-mobile">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
    </div>
  `;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function handleModalAction() {
  updatePageTitle();
  const title = document.getElementById('modal-title').textContent;
  if (title.includes('تولید قالب') || title.includes('Smart Template Generation')) {
    const goal = document.getElementById('campaign-goal').value;
    const element = document.createElement('div');
    element.className = 'canvas-element';
    element.innerHTML = `${document.documentElement.lang === 'fa' ? 'المان پیشنهادی:' : 'Suggested Element:'} ${
      goal === 'sales' ? (document.documentElement.lang === 'fa' ? 'دکمه فروش' : 'Sales Button') :
      goal === 'welcome' ? (document.documentElement.lang === 'fa' ? 'متن خوش‌آمد' : 'Welcome Text') :
      (document.documentElement.lang === 'fa' ? 'دعوتنامه رویداد' : 'Event Invitation')
    }<button class="btn-remove" onclick="this.parentElement.remove()">${document.documentElement.lang === 'fa' ? 'حذف' : 'Remove'}</button>`;
    element.draggable = true;
    element.ondragstart = drag;
    document.getElementById('canvas-content').appendChild(element);
    document.getElementById('drag-here').style.display = 'none';
    updatePreviewContent();
  } else if (title.includes('پیشنهاد محتوا') || title.includes('Content Suggestions')) {
    const type = document.getElementById('content-type').value;
    const tone = document.getElementById('content-tone').value;
    const element = document.createElement('div');
    element.className = 'canvas-element';
    element.innerHTML = `${document.documentElement.lang === 'fa' ? 'محتوای پیشنهادی:' : 'Suggested Content:'} ${
      type === 'header' ? (document.documentElement.lang === 'fa' ? 'عنوان جذاب' : 'Catchy Header') :
      type === 'body' ? (document.documentElement.lang === 'fa' ? 'متن بدنه' : 'Body Text') :
      (document.documentElement.lang === 'fa' ? 'دکمه فراخوان' : 'Call to Action')
    } (${tone === 'formal' ? (document.documentElement.lang === 'fa' ? 'رسمی' : 'Formal') : (document.documentElement.lang === 'fa' ? 'دوستانه' : 'Friendly')})<button class="btn-remove" onclick="this.parentElement.remove()">${document.documentElement.lang === 'fa' ? 'حذف' : 'Remove'}</button>`;
    element.draggable = true;
    element.ondragstart = drag;
    document.getElementById('canvas-content').appendChild(element);
    document.getElementById('drag-here').style.display = 'none';
    updatePreviewContent();
  }
  closeModal();
}

function showPreviewModal(title, content) {
  updatePageTitle();
  document.getElementById('preview-modal-title').textContent = title;
  document.getElementById('preview-modal-body').textContent = content;
  document.getElementById('preview-modal').style.display = 'block';
}

function closePreviewModal() {
  document.getElementById('preview-modal').style.display = 'none';
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data).cloneNode(true);
  element.draggable = true;
  element.ondragstart = drag;
  element.className = 'canvas-element';
  element.innerHTML += `<button class="btn-remove" onclick="this.parentElement.remove()">${document.documentElement.lang === 'fa' ? 'حذف' : 'Remove'}</button>`;
  document.getElementById('canvas-content').appendChild(element);
  document.getElementById('drag-here').style.display = 'none';
  updatePreviewContent();
}

function updatePreview() {
  updatePageTitle();
  const mode = document.getElementById('preview-mode').value;
  const previewSection = document.getElementById('preview-section');
  previewSection.style.maxWidth = mode === 'mobile' ? '375px' : mode === 'tablet' ? '500px' : '600px';
  updatePreviewContent();
}

function updatePreviewContent() {
  const canvasContent = document.getElementById('canvas-content').innerHTML;
  document.getElementById('preview-content').innerHTML = canvasContent;
}

function filterTemplates() {
  updatePageTitle();
  const search = document.getElementById('search-template').value.toLowerCase();
  const category = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort-filter').value;
  const cards = document.querySelectorAll('.gallery .card');

  let filteredCards = Array.from(cards).filter(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    return (category === 'all' || card.querySelector('h4').textContent.includes(category)) && title.includes(search);
  });

  if (sort === 'alphabetical') {
    filteredCards.sort((a, b) => a.querySelector('h4').textContent.localeCompare(b.querySelector('h4').textContent));
  } else if (sort === 'popular') {
    filteredCards.sort((a, b) => b.querySelector('h4').textContent.length - a.querySelector('h4').textContent.length);
  }

  cards.forEach(card => card.style.display = 'none');
  filteredCards.forEach(card => card.style.display = 'block');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
  updatePageTitle();
}

// Add event listener for hash changes to handle navigation
window.addEventListener('popstate', updatePageTitle);

window.onload = function() {
  // Restore language from localStorage if available
  const savedLang = localStorage.getItem('language');
  if (savedLang && document.getElementById('language')) {
    document.getElementById('language').value = savedLang;
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
  }
  updatePageTitle();
  if (document.getElementById('preview-mode')) {
    updatePreview();
  }

  // Override link clicks to update page title after navigation
  document.querySelectorAll('.menu-item, .header-link, .header-menu-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.href = href;
      setTimeout(updatePageTitle, 100); // Delay to ensure page load
    });
  });
};