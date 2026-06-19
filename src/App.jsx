import { useEffect, useMemo } from 'react';
import indexPage from '../php-backup/index.php?raw';
import aboutPage from '../php-backup/about.php?raw';
import interiorPage from '../php-backup/interior.php?raw';
import constructionPage from '../php-backup/construction.php?raw';
import galleryPage from '../php-backup/gallery.php?raw';
import './styles.css';

const business = {
  phonePrimary: '+91 96266 60910',
  phoneSecondary: '+91 98651 43167',
  emailPrimary: 'info@cdarch.in',
  emailSecondary: 'cd.gopal12@gmail.com',
  address: '16/1, Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001'
};

const legacyScripts = [
  '/vendor/jquery/jquery.min.js',
  '/vendor/jquery.appear/jquery.appear.min.js',
  '/vendor/jquery.easing/jquery.easing.min.js',
  '/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/vendor/common/common.min.js',
  '/vendor/jquery.validation/jquery.validate.min.js',
  '/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js',
  '/vendor/jquery.gmap/jquery.gmap.min.js',
  '/vendor/jquery.lazyload/jquery.lazyload.min.js',
  '/vendor/isotope/jquery.isotope.min.js',
  '/vendor/owl.carousel/owl.carousel.min.js',
  '/vendor/magnific-popup/jquery.magnific-popup.min.js',
  '/vendor/vide/jquery.vide.min.js',
  '/vendor/vivus/vivus.min.js',
  '/js/theme.js',
  '/vendor/rs-plugin/js/jquery.themepunch.tools.min.js',
  '/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js',
  '/js/custom.js',
  '/js/theme.init.js',
  '/js/examples/examples.portfolio.js'
];

const replacementMap = {
  'tel:+1234567890': 'tel:+919626660910',
  'href="" class="link-color-light11"': 'href="mailto:info@cdarch.in" class="link-color-light11"'
};

const invalidGallerySources = [
  'admin/content/upload/upp.php',
  'admin/content/upload/wso.php',
  'admin/content/upload/',
  'admin/content/upload/tttrrr.php',
  'admin/content/upload/qs.php',
  'admin/content/upload/wp-Annonymous.php',
  'admin/content/upload/FX.php'
];

const missingLinearIcons = {
  'vendor/linear-icons/tablet.svg': 'tablet',
  'vendor/linear-icons/select.svg': 'select',
  'vendor/linear-icons/magnifier.svg': 'search'
};

const internalRouteMap = {
  'index.php': 'index.html',
  'about.php': 'about.html',
  'interior.php': 'interior.html',
  'construction.php': 'construction.html',
  'gallery.php': 'gallery.html',
  'contact.php': 'contact.html'
};

const titles = {
  home: 'Concept Design Architecture',
  about: 'About Us | Concept Design Architecture',
  interior: 'Interior Works | Concept Design Architecture',
  construction: 'Construction Works | Concept Design Architecture',
  gallery: 'Gallery | Concept Design Architecture',
  contact: 'Contact Us | Concept Design Architecture'
};

function bodyFromDocument(markup) {
  const bodyMatch = markup.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : markup;
}

function removeScripts(markup) {
  return markup.replace(/<script\b[\s\S]*?<\/script>/gi, '');
}

function rewriteInternalRoutes(markup) {
  let output = markup;

  Object.entries(internalRouteMap).forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return output
    .replace(/href="interior_content\.php\?name=\d+"/g, 'href="gallery.html"')
    .replace(/href="content_construction\.php\?name=\d+"/g, 'href="gallery.html"');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function svgIcon(name) {
  const icons = {
    phone:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.8 8.7 3c.6-.2 1.2.1 1.4.7l1 2.5c.2.5 0 1-.4 1.3l-1.2.9c.9 1.9 2.4 3.4 4.2 4.2l.9-1.2c.3-.4.8-.6 1.3-.4l2.5 1c.6.2.9.8.7 1.4l-.8 2.1c-.2.5-.7.8-1.2.8C10.5 16.3 4.7 10.5 4.7 4.9c0-.5.3-.9.8-1.1Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.7" cy="7.3" r="1"/></svg>',
    twitter:
      '<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6.4c-.6.3-1.2.4-1.9.5.7-.4 1.1-1 1.4-1.8-.6.4-1.3.6-2 .8A3.1 3.1 0 0 0 12.2 8c0 .2 0 .5.1.7a8.8 8.8 0 0 1-6.4-3.2 3.1 3.1 0 0 0 1 4.2c-.5 0-.9-.1-1.4-.4v.1c0 1.5 1.1 2.7 2.5 3-.3.1-.5.1-.8.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2A6.3 6.3 0 0 1 5 16c-.3 0-.6 0-.9-.1A8.8 8.8 0 0 0 8.9 17.3c5.8 0 9-4.8 9-9v-.4c.7-.4 1.4-1 2.1-1.5Z"/></svg>',
    facebook:
      '<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2h2.1V4.7c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.1v2.9H4.8v3.9h3.3v3.1H12v-3.1h3.3l.5-3.9H12V10c0-1.1.3-1.8 2-1.8Z"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="5.8"/><path d="m15.2 15.2 4.3 4.3"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 14.8a4 4 0 0 1 0-5.6l2-2a4 4 0 0 1 5.6 5.6l-1 1"/><path d="M14.8 9.2a4 4 0 0 1 0 5.6l-2 2a4 4 0 0 1-5.6-5.6l1-1"/></svg>',
    tablet:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3.5" width="12" height="17" rx="2"/><path d="M10.5 17.5h3"/></svg>',
    select:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 3 3 5-6"/></svg>',
    layers:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 16 8 4 8-4"/></svg>',
    magic:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 20 9.5-9.5"/><path d="m12 7 2 2"/><path d="M17 4v3"/><path d="M15.5 5.5h3"/><path d="M20 10v2"/><path d="M19 11h2"/></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="7.5" width="17" height="11" rx="2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"/><path d="M3.5 12h17"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 5-4 14"/></svg>',
    chevronLeft:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    chevronRight:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    chevronUp:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>',
    chevronDown:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    star:
      '<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.1-5.6-3-5.6 3 1.1-6.1L3 9.6l6.2-.9L12 3Z"/></svg>',
    tag:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12.8 11.8 20l7.7-7.7V4.5h-7.8L4.5 11.7a.8.8 0 0 0 0 1.1Z"/><circle cx="15.8" cy="8.2" r="1.2"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.3 4.3L19 6.7"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>'
  };

  return icons[name] || icons.search;
}

function iconNameForClass(className) {
  const value = className.toLowerCase();

  if (value.includes('phone')) return 'phone';
  if (value.includes('envelope')) return 'mail';
  if (value.includes('instagram')) return 'instagram';
  if (value.includes('twitter')) return 'twitter';
  if (value.includes('facebook')) return 'facebook';
  if (value.includes('magnifier')) return 'search';
  if (value.includes('link')) return 'link';
  if (value.includes('tablet')) return 'tablet';
  if (value.includes('layers')) return 'layers';
  if (value.includes('magic-wand')) return 'magic';
  if (value.includes('briefcase')) return 'briefcase';
  if (value.includes('code')) return 'code';
  if (value.includes('chevron-left')) return 'chevronLeft';
  if (value.includes('chevron-right')) return 'chevronRight';
  if (value.includes('chevron-up')) return 'chevronUp';
  if (value.includes('chevron-down')) return 'chevronDown';
  if (value.includes('angle-left')) return 'chevronLeft';
  if (value.includes('angle-right')) return 'chevronRight';
  if (value.includes('angle-up')) return 'chevronUp';
  if (value.includes('angle-down')) return 'chevronDown';
  if (value.includes('star')) return 'star';
  if (value.includes('tag')) return 'tag';
  if (value.includes('check')) return 'check';
  if (value.includes('location')) return 'location';

  return null;
}

function iconUtilityClasses(className) {
  return className
    .split(/\s+/)
    .filter(Boolean)
    .filter((name) => {
      if (name === 'lnr' || name === 'fas' || name === 'fab' || name === 'far' || name === 'fa' || name === 'icon') {
        return false;
      }

      return !name.startsWith('lnr-') && !name.startsWith('fa-') && !name.startsWith('icon-');
    })
    .join(' ');
}

function replaceIconFonts(markup) {
  return markup.replace(/<i\b([^>]*)class="([^"]+)"([^>]*)>\s*<\/i>/gi, (match, beforeClass, className, afterClass) => {
    const iconName = iconNameForClass(className);

    if (!iconName) {
      return match;
    }

    const utilityClasses = iconUtilityClasses(className);
    const classes = ['cd-icon-replaced', utilityClasses].filter(Boolean).join(' ');

    return `<span${beforeClass}class="${classes}"${afterClass}>${svgIcon(iconName)}</span>`;
  });
}

function replaceMissingLinearIconImages(markup) {
  let output = markup;

  Object.entries(missingLinearIcons).forEach(([source, iconName]) => {
    const pattern = new RegExp(`<img\\b([^>]*?)src="${escapeRegExp(source)}"([^>]*)>`, 'gi');
    output = output.replace(pattern, `<span class="cd-icon-replaced cd-icon-image-replacement">${svgIcon(iconName)}</span>`);
  });

  return output;
}

function applyIconFallbacks(markup) {
  return replaceMissingLinearIconImages(replaceIconFonts(markup));
}

function replaceRuntimeIconFonts() {
  document.querySelectorAll('i.lnr, i.fas, i.fab, i.far, i.fa, i.icon').forEach((icon) => {
    const iconName = iconNameForClass(icon.className);

    if (!iconName) {
      return;
    }

    const replacement = document.createElement('span');
    const utilityClasses = iconUtilityClasses(icon.className);
    replacement.className = ['cd-icon-replaced', utilityClasses].filter(Boolean).join(' ');

    Array.from(icon.attributes).forEach((attribute) => {
      if (attribute.name !== 'class') {
        replacement.setAttribute(attribute.name, attribute.value);
      }
    });

    replacement.innerHTML = svgIcon(iconName);
    icon.replaceWith(replacement);
  });
}

function removeGalleryInvalidItems(markup) {
  let output = markup;

  invalidGallerySources.forEach((source) => {
    const pattern = new RegExp(`\\s*<li\\b[^>]*isotope-item[^>]*>(?:(?!<\\/li>)[\\s\\S])*?<img\\s+src="${escapeRegExp(source)}"(?:(?!<\\/li>)[\\s\\S])*?<\\/li>`, 'gi');
    output = output.replace(pattern, '');
  });

  return output;
}

function fixedMarkup(markup) {
  let output = removeScripts(bodyFromDocument(markup));

  output = output
    .replace(
      /href="https:\/\/www\.okler\.net\/cdn-cgi\/l\/email-protection#[^"]*"/g,
      `href="mailto:${business.emailSecondary}"`
    )
    .replace(/cd\.gopal12@gmail\.com/g, business.emailSecondary)
    .replace(/info@cdarch\.in/g, business.emailPrimary);

  Object.entries(replacementMap).forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return applyIconFallbacks(rewriteInternalRoutes(output));
}

function galleryMarkup() {
  return fixedMarkup(removeGalleryInvalidItems(galleryPage));
}

function routeName(pathname) {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized.slice(normalized.lastIndexOf('/') + 1) || 'index.html';
}

function splitShell(pageMarkup) {
  const markup = fixedMarkup(pageMarkup);
  const mainStart = markup.indexOf('<div role="main" class="main">');
  const footerIndex = markup.indexOf('<footer id="footer"');
  const footerStyleIndex = markup.lastIndexOf('<style>', footerIndex);
  const footerStart = footerStyleIndex > mainStart ? footerStyleIndex : footerIndex;

  return {
    beforeMain: markup.slice(0, mainStart),
    footer: markup.slice(footerStart)
  };
}

function contactMarkup() {
  const { beforeMain, footer } = splitShell(indexPage);
  return `${beforeMain}
    <div role="main" class="main">
      <section class="page-header parallax overlay overlay-show overlay-op-8 appear-animation" data-appear-animation="fadeIn" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%', 'offset': 60}" data-image-src="img/Slider 1.jpg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 text-center">
              <h1 class="font-weight-bold text-color-light text-9 mb-2">Contact Us</h1>
              <p class="text-color-light mb-0">Tell us about your interior, construction or architecture requirement.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <span class="top-sub-title text-color-primary">GET IN TOUCH</span>
              <h2 class="font-weight-extra-bold line-height-1 mb-4">Concept & Design Architecture-Interior</h2>
              <ul class="list list-unstyled">
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">PHONE</span><a href="tel:+919626660910">+91 96266 60910</a>, <a href="tel:+919865143167">+91 98651 43167</a></li>
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">EMAIL</span><a href="mailto:info@cdarch.in">info@cdarch.in</a><br><a href="mailto:cd.gopal12@gmail.com">cd.gopal12@gmail.com</a></li>
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">ADDRESS</span>${business.address}</li>
              </ul>
            </div>
            <div class="col-lg-7">
              <form class="contact-form-replica" action="mailto:info@cdarch.in" method="post" enctype="text/plain">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label class="font-weight-bold text-color-dark">Name</label>
                    <input type="text" name="name" class="form-control" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label class="font-weight-bold text-color-dark">Phone</label>
                    <input type="tel" name="phone" class="form-control" required>
                  </div>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold text-color-dark">Project Type</label>
                  <select name="project" class="form-control">
                    <option>Interior</option>
                    <option>Architecture</option>
                    <option>Construction</option>
                    <option>Elevation</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold text-color-dark">Message</label>
                  <textarea name="message" rows="5" class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-rounded font-weight-bold btn-v-3 btn-h-4 text-0">SEND ENQUIRY</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  ${footer}`;
}

function pageForPath(pathname) {
  const route = routeName(pathname);

  if (route === 'about' || route === 'about.php' || route === 'about.html') {
    return { html: fixedMarkup(aboutPage), title: titles.about };
  }

  if (route === 'interior' || route === 'interior.php' || route === 'interior.html') {
    return { html: fixedMarkup(interiorPage), title: titles.interior };
  }

  if (route === 'construction' || route === 'construction.php' || route === 'construction.html') {
    return { html: fixedMarkup(constructionPage), title: titles.construction };
  }

  if (route === 'gallery' || route === 'gallery.php' || route === 'gallery.html') {
    return { html: galleryMarkup(), title: titles.gallery };
  }

  if (route === 'contact' || route === 'contact.php' || route === 'contact.html' || route === 'cpanel' || route === 'cpanel.html') {
    return { html: contactMarkup(), title: titles.contact };
  }

  return { html: fixedMarkup(indexPage), title: titles.home };
}

function loadScript(src) {
  return new Promise((resolve) => {
    if (document.querySelector(`script[data-legacy-src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.dataset.legacySrc = src;
    script.onload = resolve;
    script.onerror = resolve;
    document.body.appendChild(script);
  });
}

async function loadLegacyScripts() {
  for (const src of legacyScripts) {
    await loadScript(src);
  }
}

function App() {
  const page = useMemo(() => pageForPath(window.location.pathname), []);

  useEffect(() => {
    document.title = page.title;
    let cleanup = false;

    loadLegacyScripts().then(() => {
      if (cleanup) {
        return;
      }

      replaceRuntimeIconFonts();
      window.setTimeout(replaceRuntimeIconFonts, 300);
      window.setTimeout(replaceRuntimeIconFonts, 1000);
    });

    return () => {
      cleanup = true;
    };
  }, [page.title]);

  return <div dangerouslySetInnerHTML={{ __html: page.html }} />;
}

export default App;
