(function () {
  const $ = (id) => document.getElementById(id);
  const elements = {
    input: $("textInput"),
    langSelect: $("languageSelect"),
    languageName: $("languageName"),
    wordCount: $("wordCount"),
    charCount: $("charCount"),
    charNoSpaceCount: $("charNoSpaceCount"),
    sentenceCount: $("sentenceCount"),
    paragraphCount: $("paragraphCount"),
    lineCount: $("lineCount"),
    readingTime: $("readingTime"),
    byteCount: $("byteCount"),
    scriptBreakdown: $("scriptBreakdown"),
    keywordList: $("keywordList"),
    clearBtn: $("clearBtn"),
    copyBtn: $("copyBtn"),
    sampleBtn: $("sampleBtn"),
    year: $("year")
  };

  const translations = {
    en: {
      metaTitle: "Free Online Word Counter | Multilingual Character & Text Analyzer",
      metaDescription: "Free online word counter for English, Chinese, Japanese, Korean, Spanish, French, German, Portuguese, Russian, Arabic and more.",
      skip: "Skip to tool",
      eyebrow: "Free, private, multilingual",
      title: "Online Word Counter",
      lede: "Paste or type text to count words, characters, sentences, paragraphs, reading time and keyword frequency instantly.",
      trustLocal: "Runs in your browser",
      trustNoSignup: "No registration",
      trustFree: "Free to use",
      inputLabel: "Your text",
      privacyNote: "Text is analyzed locally and is not uploaded.",
      sampleBtn: "Sample",
      copyBtn: "Copy report",
      clearBtn: "Clear",
      placeholder: "Paste your article, essay, social post, product copy or multilingual text here...",
      detectedLanguage: "Detected language",
      words: "Words",
      chars: "Characters",
      charsNoSpaces: "No spaces",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      lines: "Lines",
      readingTime: "Reading time",
      bytes: "UTF-8 bytes",
      compositionTitle: "Text composition",
      keywordsTitle: "Top keywords",
      adLabel: "Advertisement",
      whyTitle: "A practical word counter for daily writing",
      whyBody: "Use it for essays, blog posts, resumes, product descriptions, translation drafts, social media posts and SEO copy. It supports languages with spaces and languages without spaces.",
      seoTitle: "Useful for SEO and publishing",
      seoBody: "Check article length, keyword repetition, paragraph count and reading time before publishing to Google, Bing, Baidu, Yandex or other search engines.",
      privacyTitle: "Private by design",
      privacyBody: "The counter runs in the browser. Your text is not sent to a server, so drafts, emails and confidential copy stay on your device.",
      faqTitle: "FAQ",
      faqFreeQ: "Is this word counter free?",
      faqFreeA: "Yes. It is free, does not require registration and can be used directly in the browser.",
      faqLanguagesQ: "Which languages are supported?",
      faqLanguagesA: "The tool supports English, Chinese, Japanese, Korean, Spanish, French, German, Portuguese, Russian, Arabic and many other languages.",
      faqPrivateQ: "Will my text be uploaded?",
      faqPrivateA: "No. Counting happens locally in your browser.",
      footerText: "Free online word and character counter",
      minute: "min",
      emptyKeywords: "Keywords appear after you add text.",
      copied: "Copied",
      reportTitle: "Text report",
      sampleText: "VagaTools is a free online word counter. Paste text in English, 中文, 日本語, 한국어, Español or العربية to see instant statistics, reading time and keyword frequency."
    },
    zh: {
      metaTitle: "免费在线字数统计工具 | 多语言字符统计与文本分析",
      metaDescription: "免费在线字数统计，支持中文、英文、日文、韩文、西班牙语、法语、德语、葡萄牙语、俄语、阿拉伯语等。",
      skip: "跳到工具",
      eyebrow: "免费、私密、多语言",
      title: "在线字数统计",
      lede: "粘贴或输入文本，即时统计字数、字符数、句子、段落、阅读时间和关键词频率。",
      trustLocal: "浏览器本地运行",
      trustNoSignup: "无需注册",
      trustFree: "永久免费使用",
      inputLabel: "你的文本",
      privacyNote: "文本仅在本地分析，不会上传。",
      sampleBtn: "示例",
      copyBtn: "复制报告",
      clearBtn: "清空",
      placeholder: "在这里粘贴文章、论文、社媒文案、商品描述或多语言文本...",
      detectedLanguage: "识别语言",
      words: "词数",
      chars: "字符数",
      charsNoSpaces: "不含空格",
      sentences: "句子",
      paragraphs: "段落",
      lines: "行数",
      readingTime: "阅读时间",
      bytes: "UTF-8 字节",
      compositionTitle: "文本构成",
      keywordsTitle: "高频关键词",
      adLabel: "广告",
      whyTitle: "适合日常写作的字数统计工具",
      whyBody: "可用于论文、博客、简历、商品描述、翻译草稿、社交媒体内容和 SEO 文案。支持有空格语言，也支持中文、日文、韩文等无空格语言。",
      seoTitle: "适合 SEO 与发布前检查",
      seoBody: "发布到 Google、Bing、百度、Yandex 等搜索引擎前，可以检查文章长度、关键词重复、段落数量和阅读时间。",
      privacyTitle: "默认保护隐私",
      privacyBody: "统计在浏览器内完成，文本不会发送到服务器。草稿、邮件和敏感内容会留在你的设备上。",
      faqTitle: "常见问题",
      faqFreeQ: "这个字数统计工具免费吗？",
      faqFreeA: "免费。无需注册，打开浏览器即可使用。",
      faqLanguagesQ: "支持哪些语言？",
      faqLanguagesA: "支持中文、英文、日文、韩文、西班牙语、法语、德语、葡萄牙语、俄语、阿拉伯语等多种语言。",
      faqPrivateQ: "我的文本会上传吗？",
      faqPrivateA: "不会。统计过程在浏览器本地完成。",
      footerText: "免费在线字数与字符统计",
      minute: "分钟",
      emptyKeywords: "输入文本后会显示关键词。",
      copied: "已复制",
      reportTitle: "文本统计报告",
      sampleText: "VagaTools 是一个免费的在线字数统计工具。你可以粘贴中文、English、日本語、한국어、Español 或 العربية，立即查看字符数、阅读时间和关键词频率。"
    },
    es: {
      title: "Contador de palabras online",
      lede: "Pega o escribe texto para contar palabras, caracteres, frases, párrafos, tiempo de lectura y palabras clave al instante.",
      inputLabel: "Tu texto",
      placeholder: "Pega aquí tu artículo, ensayo, publicación social o texto multilingüe...",
      copyBtn: "Copiar informe",
      clearBtn: "Borrar",
      sampleBtn: "Ejemplo",
      words: "Palabras",
      chars: "Caracteres",
      charsNoSpaces: "Sin espacios",
      sentences: "Frases",
      paragraphs: "Párrafos",
      lines: "Líneas",
      readingTime: "Lectura",
      bytes: "Bytes UTF-8",
      detectedLanguage: "Idioma detectado",
      keywordsTitle: "Palabras clave",
      compositionTitle: "Composición",
      minute: "min",
      copied: "Copiado"
    },
    fr: {
      title: "Compteur de mots en ligne",
      lede: "Collez ou saisissez un texte pour compter les mots, caractères, phrases, paragraphes, temps de lecture et mots-clés.",
      inputLabel: "Votre texte",
      placeholder: "Collez ici votre article, essai, publication ou texte multilingue...",
      copyBtn: "Copier le rapport",
      clearBtn: "Effacer",
      sampleBtn: "Exemple",
      words: "Mots",
      chars: "Caractères",
      charsNoSpaces: "Sans espaces",
      sentences: "Phrases",
      paragraphs: "Paragraphes",
      lines: "Lignes",
      readingTime: "Lecture",
      bytes: "Octets UTF-8",
      detectedLanguage: "Langue détectée",
      keywordsTitle: "Mots-clés",
      compositionTitle: "Composition",
      minute: "min",
      copied: "Copié"
    },
    de: {
      title: "Online-Wortzähler",
      lede: "Text einfügen oder schreiben und Wörter, Zeichen, Sätze, Absätze, Lesezeit und Schlüsselwörter sofort zählen.",
      inputLabel: "Dein Text",
      placeholder: "Füge hier Artikel, Essay, Social Post oder mehrsprachigen Text ein...",
      copyBtn: "Bericht kopieren",
      clearBtn: "Leeren",
      sampleBtn: "Beispiel",
      words: "Wörter",
      chars: "Zeichen",
      charsNoSpaces: "Ohne Leerzeichen",
      sentences: "Sätze",
      paragraphs: "Absätze",
      lines: "Zeilen",
      readingTime: "Lesezeit",
      bytes: "UTF-8-Bytes",
      detectedLanguage: "Erkannte Sprache",
      keywordsTitle: "Top-Keywords",
      compositionTitle: "Textstruktur",
      minute: "Min.",
      copied: "Kopiert"
    },
    ja: {
      title: "オンライン文字数カウント",
      lede: "文章を貼り付けるだけで、単語数、文字数、文、段落、読了時間、キーワード頻度をすぐに確認できます。",
      inputLabel: "テキスト",
      placeholder: "記事、レポート、SNS投稿、商品説明、多言語テキストを貼り付けてください...",
      copyBtn: "レポートをコピー",
      clearBtn: "クリア",
      sampleBtn: "サンプル",
      words: "単語数",
      chars: "文字数",
      charsNoSpaces: "空白なし",
      sentences: "文",
      paragraphs: "段落",
      lines: "行",
      readingTime: "読了時間",
      bytes: "UTF-8 バイト",
      detectedLanguage: "検出言語",
      keywordsTitle: "頻出語",
      compositionTitle: "構成",
      minute: "分",
      copied: "コピー済み"
    },
    ko: {
      title: "온라인 글자 수 세기",
      lede: "텍스트를 붙여 넣으면 단어, 글자, 문장, 단락, 읽기 시간과 키워드 빈도를 즉시 확인합니다.",
      inputLabel: "텍스트",
      placeholder: "기사, 에세이, 소셜 게시물, 상품 설명 또는 다국어 텍스트를 붙여 넣으세요...",
      copyBtn: "보고서 복사",
      clearBtn: "지우기",
      sampleBtn: "예시",
      words: "단어",
      chars: "글자",
      charsNoSpaces: "공백 제외",
      sentences: "문장",
      paragraphs: "단락",
      lines: "줄",
      readingTime: "읽기 시간",
      bytes: "UTF-8 바이트",
      detectedLanguage: "감지된 언어",
      keywordsTitle: "주요 키워드",
      compositionTitle: "텍스트 구성",
      minute: "분",
      copied: "복사됨"
    },
    pt: {
      title: "Contador de palavras online",
      lede: "Cole ou digite texto para contar palavras, caracteres, frases, parágrafos, tempo de leitura e palavras-chave.",
      inputLabel: "Seu texto",
      placeholder: "Cole aqui seu artigo, redação, post social ou texto multilíngue...",
      copyBtn: "Copiar relatório",
      clearBtn: "Limpar",
      sampleBtn: "Exemplo",
      words: "Palavras",
      chars: "Caracteres",
      charsNoSpaces: "Sem espaços",
      sentences: "Frases",
      paragraphs: "Parágrafos",
      lines: "Linhas",
      readingTime: "Leitura",
      bytes: "Bytes UTF-8",
      detectedLanguage: "Idioma detectado",
      keywordsTitle: "Palavras-chave",
      compositionTitle: "Composição",
      minute: "min",
      copied: "Copiado"
    },
    ru: {
      title: "Онлайн счетчик слов",
      lede: "Вставьте текст, чтобы мгновенно посчитать слова, символы, предложения, абзацы, время чтения и ключевые слова.",
      inputLabel: "Ваш текст",
      placeholder: "Вставьте статью, эссе, пост, описание товара или многоязычный текст...",
      copyBtn: "Копировать отчет",
      clearBtn: "Очистить",
      sampleBtn: "Пример",
      words: "Слова",
      chars: "Символы",
      charsNoSpaces: "Без пробелов",
      sentences: "Предложения",
      paragraphs: "Абзацы",
      lines: "Строки",
      readingTime: "Время чтения",
      bytes: "UTF-8 байты",
      detectedLanguage: "Определенный язык",
      keywordsTitle: "Ключевые слова",
      compositionTitle: "Состав текста",
      minute: "мин",
      copied: "Скопировано"
    },
    ar: {
      title: "عداد كلمات مجاني",
      lede: "الصق النص لحساب الكلمات والأحرف والجمل والفقرات ووقت القراءة والكلمات المفتاحية فورًا.",
      inputLabel: "النص",
      placeholder: "الصق المقال أو المنشور أو الوصف أو النص متعدد اللغات هنا...",
      copyBtn: "نسخ التقرير",
      clearBtn: "مسح",
      sampleBtn: "مثال",
      words: "الكلمات",
      chars: "الأحرف",
      charsNoSpaces: "بدون مسافات",
      sentences: "الجمل",
      paragraphs: "الفقرات",
      lines: "الأسطر",
      readingTime: "وقت القراءة",
      bytes: "بايت UTF-8",
      detectedLanguage: "اللغة المكتشفة",
      keywordsTitle: "الكلمات المفتاحية",
      compositionTitle: "تكوين النص",
      minute: "دقيقة",
      copied: "تم النسخ"
    }
  };

  const languageNames = {
    latin: "Latin / English / European",
    han: "Chinese / Han",
    hiragana: "Japanese Hiragana",
    katakana: "Japanese Katakana",
    hangul: "Korean Hangul",
    cyrillic: "Russian / Cyrillic",
    arabic: "Arabic",
    devanagari: "Hindi / Devanagari",
    thai: "Thai",
    other: "Other"
  };

  const wordStopList = new Set([
    "the", "and", "for", "that", "with", "you", "this", "are", "was", "from", "your", "have", "not", "but", "all", "can",
    "use", "les", "des", "une", "que", "para", "por", "con", "los", "las", "der", "die", "das", "und", "den", "von",
    "это", "для", "что", "как", "или", "من", "في", "على", "هذا", "هذه", "的", "了", "和", "是", "在", "有", "に", "の", "は", "を"
  ]);

  let activeLang = "en";

  function getLocale() {
    const query = new URLSearchParams(window.location.search).get("lang");
    const saved = localStorage.getItem("vagatools-word-counter-lang");
    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    const candidate = query || saved || browserLang;
    return translations[candidate] ? candidate : "en";
  }

  function t(key) {
    return (translations[activeLang] && translations[activeLang][key]) || translations.en[key] || key;
  }

  function applyLanguage(lang, persist) {
    activeLang = translations[lang] ? lang : "en";
    document.documentElement.lang = activeLang;
    document.body.dir = activeLang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    document.title = t("metaTitle");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("metaDescription"));
    elements.langSelect.value = activeLang;
    if (persist) localStorage.setItem("vagatools-word-counter-lang", activeLang);
    updateStats();
  }

  function number(value) {
    return new Intl.NumberFormat(activeLang).format(value);
  }

  function splitWords(text) {
    const trimmed = text.trim();
    if (!trimmed) return [];
    if ("Intl" in window && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter(activeLang, { granularity: "word" });
      return Array.from(segmenter.segment(trimmed))
        .filter((part) => part.isWordLike)
        .map((part) => part.segment);
    }
    return trimmed.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) || [];
  }

  function countScripts(text) {
    const scripts = {
      latin: 0,
      han: 0,
      hiragana: 0,
      katakana: 0,
      hangul: 0,
      cyrillic: 0,
      arabic: 0,
      devanagari: 0,
      thai: 0,
      other: 0
    };
    for (const char of text) {
      if (/\s|\p{P}|\p{S}|\p{N}/u.test(char)) continue;
      if (/\p{Script=Han}/u.test(char)) scripts.han += 1;
      else if (/\p{Script=Hiragana}/u.test(char)) scripts.hiragana += 1;
      else if (/\p{Script=Katakana}/u.test(char)) scripts.katakana += 1;
      else if (/\p{Script=Hangul}/u.test(char)) scripts.hangul += 1;
      else if (/\p{Script=Cyrillic}/u.test(char)) scripts.cyrillic += 1;
      else if (/\p{Script=Arabic}/u.test(char)) scripts.arabic += 1;
      else if (/\p{Script=Devanagari}/u.test(char)) scripts.devanagari += 1;
      else if (/\p{Script=Thai}/u.test(char)) scripts.thai += 1;
      else if (/\p{Script=Latin}/u.test(char)) scripts.latin += 1;
      else scripts.other += 1;
    }
    return scripts;
  }

  function detectLanguage(scripts) {
    const entries = Object.entries(scripts).sort((a, b) => b[1] - a[1]);
    const top = entries[0];
    return top && top[1] > 0 ? languageNames[top[0]] : "-";
  }

  function countSentences(text) {
    const matches = text.match(/[^.!?。！？؟]+[.!?。！？؟]+/gu);
    if (matches) return matches.length;
    return text.trim() ? 1 : 0;
  }

  function getKeywords(words) {
    const frequency = new Map();
    words.forEach((word) => {
      const normalized = word.toLocaleLowerCase(activeLang).trim();
      if (normalized.length < 2 || wordStopList.has(normalized)) return;
      frequency.set(normalized, (frequency.get(normalized) || 0) + 1);
    });
    return Array.from(frequency.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8);
  }

  function renderBreakdown(scripts) {
    const total = Object.values(scripts).reduce((sum, value) => sum + value, 0);
    const rows = Object.entries(scripts)
      .filter(([, value]) => value > 0)
      .sort((a, b) => b[1] - a[1]);

    if (!rows.length) {
      elements.scriptBreakdown.innerHTML = '<p class="muted">-</p>';
      return;
    }

    elements.scriptBreakdown.innerHTML = rows.map(([script, value]) => {
      const percent = total ? Math.round((value / total) * 100) : 0;
      return `
        <div class="meter-row">
          <span>${languageNames[script] || script}</span>
          <div class="meter" aria-hidden="true"><span style="width: ${percent}%"></span></div>
          <strong>${percent}%</strong>
        </div>
      `;
    }).join("");
  }

  function renderKeywords(words) {
    const keywords = getKeywords(words);
    if (!keywords.length) {
      elements.keywordList.innerHTML = `<li>${t("emptyKeywords")}</li>`;
      return;
    }
    elements.keywordList.innerHTML = keywords
      .map(([keyword, count]) => `<li><strong>${escapeHtml(keyword)}</strong> <span>${number(count)}</span></li>`)
      .join("");
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function updateStats() {
    const text = elements.input.value;
    const words = splitWords(text);
    const scripts = countScripts(text);
    const charCount = Array.from(text).length;
    const noSpaces = Array.from(text.replace(/\s/gu, "")).length;
    const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/g).length : 0;
    const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
    const sentences = countSentences(text);
    const readingMinutes = Math.max(0, Math.ceil(words.length / 220));
    const bytes = new TextEncoder().encode(text).length;

    elements.languageName.textContent = detectLanguage(scripts);
    elements.wordCount.textContent = number(words.length);
    elements.charCount.textContent = number(charCount);
    elements.charNoSpaceCount.textContent = number(noSpaces);
    elements.sentenceCount.textContent = number(sentences);
    elements.paragraphCount.textContent = number(paragraphs);
    elements.lineCount.textContent = number(lines);
    elements.readingTime.textContent = `${number(readingMinutes)} ${t("minute")}`;
    elements.byteCount.textContent = number(bytes);

    renderBreakdown(scripts);
    renderKeywords(words);
  }

  function buildReport() {
    return [
      t("reportTitle"),
      `${t("words")}: ${elements.wordCount.textContent}`,
      `${t("chars")}: ${elements.charCount.textContent}`,
      `${t("charsNoSpaces")}: ${elements.charNoSpaceCount.textContent}`,
      `${t("sentences")}: ${elements.sentenceCount.textContent}`,
      `${t("paragraphs")}: ${elements.paragraphCount.textContent}`,
      `${t("readingTime")}: ${elements.readingTime.textContent}`,
      `${t("detectedLanguage")}: ${elements.languageName.textContent}`
    ].join("\n");
  }

  elements.input.addEventListener("input", updateStats);
  elements.clearBtn.addEventListener("click", () => {
    elements.input.value = "";
    elements.input.focus();
    updateStats();
  });
  elements.sampleBtn.addEventListener("click", () => {
    elements.input.value = t("sampleText");
    elements.input.focus();
    updateStats();
  });
  elements.copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(buildReport());
    const original = elements.copyBtn.textContent;
    elements.copyBtn.textContent = t("copied");
    window.setTimeout(() => {
      elements.copyBtn.textContent = original;
    }, 1200);
  });
  elements.langSelect.addEventListener("change", (event) => {
    const value = event.target.value === "auto" ? getLocale() : event.target.value;
    applyLanguage(value, true);
  });

  elements.year.textContent = new Date().getFullYear();
  applyLanguage(getLocale(), false);
})();
