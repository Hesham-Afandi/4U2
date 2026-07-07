import { Curriculum, Unit, Lesson } from '../types';

/**
 * Dynamically generates a beautiful, rich educational curriculum
 * for any country, subject, grade, stream, and term to ensure 100% interactive
 * coverage without empty placeholders or construction screens.
 */
export const generateCurriculum = (
  country: string,
  subjectId: string,
  gradeId: number,
  streamId: string,
  programId: string | null,
  termId: number
): Curriculum => {
  // Let's translate subjectId to Arabic display name and icon
  let subjectName = 'المادة';
  let subjectIcon = '📚';
  switch (subjectId) {
    case 'math':
      subjectName = 'الرياضيات';
      subjectIcon = '📐';
      break;
    case 'physics':
      subjectName = 'الفيزياء';
      subjectIcon = '⚛️';
      break;
    case 'chemistry':
      subjectName = 'الكيمياء';
      subjectIcon = '🧪';
      break;
    case 'biology':
      subjectName = 'الأحياء';
      subjectIcon = '🧬';
      break;
    case 'arabic':
      subjectName = 'اللغة العربية';
      subjectIcon = '📖';
      break;
    case 'english':
      subjectName = 'اللغة الإنجليزية';
      subjectIcon = '🔤';
      break;
    case 'islamic':
      subjectName = 'التربية الإسلامية';
      subjectIcon = '🕋';
      break;
    case 'social':
      subjectName = 'الدراسات الاجتماعية';
      subjectIcon = '🌍';
      break;
    case 'computer':
      subjectName = 'علوم الحاسوب';
      subjectIcon = '💻';
      break;
  }

  // Let's translate country display name
  let countryAr = 'الإمارات';
  switch (country) {
    case 'UAE':
      countryAr = 'الإمارات';
      break;
    case 'Saudi':
      countryAr = 'السعودية';
      break;
    case 'Egypt':
      countryAr = 'مصر';
      break;
    case 'Oman':
      countryAr = 'عُمان';
      break;
    case 'Qatar':
      countryAr = 'قطر';
      break;
    case 'Bahrain':
      countryAr = 'البحرين';
      break;
  }

  const streamNameAr = streamId === 'advanced' ? 'المتقدم' : 'العام';
  const termNameAr = `الترم ${termId}`;

  // Custom unit topics based on subject to make them highly realistic!
  let unit1Name = `الوحدة الأولى: المفاهيم والأسس في ${subjectName}`;
  let unit1Desc = `تغطي هذه الوحدة المبادئ النظرية الأساسية لـ ${subjectName} لطلبة المسار ${streamNameAr} في ${countryAr}.`;
  let unit2Name = `الوحدة الثانية: التطبيقات العملية وحل المسائل في ${subjectName}`;
  let unit2Desc = `تطبيقات متقدمة لـ ${subjectName} من واقع البيئة التعليمية والامتحانية في ${countryAr}.`;

  // Tailored content topics based on subject ID
  let lesson1Title = `مدخل ومقدمة عامة في ${subjectName}`;
  let lesson2Title = `النظريات والقوانين الرئيسية في ${subjectName}`;
  let lesson3Title = `التحليل وحل المسائل المركبة لـ ${subjectName}`;

  let formulaContent = 'F_total = m × a';
  let introText = `أهلاً بك في رحلة دراسة ${subjectName}. يستعرض هذا الدرس المفاهيم المعيارية الأساسية لطلبة الصف ${gradeId} المعتمدة لـ ${countryAr}.`;
  
  const bulletPoints = [
    `فهم المبادئ المنهجية والقوانين الحاكمة لـ ${subjectName}.`,
    `تطبيق النماذج التحليلية المعتمدة في امتحانات وزارة التعليم بـ ${countryAr}.`,
    'تطوير التفكير والتحليل العلمي خطوة بخطوة للوصول للحل الصحيح.',
    'تقييم ذاتي فوري عبر حل الاختبار التجريبي المرفق مع كل درس.'
  ];

  if (subjectId === 'math') {
    unit1Name = 'الوحدة الأولى: التفاضل والنهايات وقواعد الاتصال';
    unit1Desc = 'دراسة شاملة لنهاية الدوال عند نقطة والاتصال ونهايات الملا نهاية ومعدل التغير اللحظي.';
    unit2Name = 'الوحدة الثانية: تطبيقات المشتقة وحساب التفاضل المتقدم';
    unit2Desc = 'تطبيقات هندسية وفيزيائية على المشتقات وإيجاد القيم القصوى المطلقة والمحلية.';
    lesson1Title = 'مفهوم النهاية والاتصال للدوال';
    lesson2Title = 'المشتقة الأولى ومعدل التغير اللحظي';
    lesson3Title = 'تطبيقات المشتقات في المسائل الحياتية';
    formulaContent = 'f\'(x) = lim(h→0) [f(x+h) - f(x)] / h';
  } else if (subjectId === 'physics') {
    unit1Name = 'الوحدة الأولى: الميكانيكا الحركية والقوى الديناميكية';
    unit1Desc = 'دراسة حركة الأجسام تحت تأثير القوى وقوانين نيوتن وحفظ الطاقة والزخم.';
    unit2Name = 'الوحدة الثانية: الكهرومغناطيسية والدوائر الكهربائية';
    unit2Desc = 'المجالات المغناطيسية والتدفق الكهرومغناطيسي وقوانين فاراداي والجهد المتردد.';
    lesson1Title = 'الحركة في بعدين والمقذوفات';
    lesson2Title = 'قوانين الحركة لنيوتن وتطبيقات القوى';
    lesson3Title = 'المجال المغناطيسي والقوة المغناطيسية المؤثرة';
    formulaContent = 'F = q × (E + v × B)  |  p = m × v';
  } else if (subjectId === 'chemistry') {
    unit1Name = 'الوحدة الأولى: الروابط الكيميائية والهياكل الجزيئية';
    unit1Desc = 'دراسة الروابط الأيونية والتساهمية، ونظرية تنافر أزواج إلكترونات غلاف التكافؤ (VSEPR).';
    unit2Name = 'الوحدة الثانية: الكيمياء الحركية والاتزان الديناميكي';
    unit2Desc = 'سرعة التفاعلات الكيميائية والعوامل المؤثرة ومبدأ لوشاتيليه وثابت الاتزان.';
    lesson1Title = 'الروابط التساهمية وتداخل الأفلاك';
    lesson2Title = 'قوانين الغازات وحسابات الغاز المثالي';
    lesson3Title = 'حساب ثابت الاتزان الكيميائي (Kc)';
    formulaContent = 'P × V = n × R × T  |  Kc = [Products] / [Reactants]';
  } else if (subjectId === 'biology') {
    unit1Name = 'الوحدة الأولى: البيولوجيا الخلوية وإنتاج الطاقة';
    unit1Desc = 'بنية الخلايا الحية ووظائف العضيات، التنفس الخلوي والبناء الضوئي.';
    unit2Name = 'الوحدة الثانية: الوراثة الجزيئية وتطبيقات الـ DNA';
    unit2Desc = 'تضاعف الحمض النووي والتعبير الجيني وتخليق البروتينات وعلم الوراثة المندلية.';
    lesson1Title = 'عضيات الخلية ووظائف الغشاء الخلوي';
    lesson2Title = 'مراحل الانقسام الخلوي (الميتوزي والميوزي)';
    lesson3Title = 'قوانين مندل وتحديد الصفات الوراثية';
    formulaContent = '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂';
  } else if (subjectId === 'arabic') {
    unit1Name = 'الوحدة الأولى: تاريخ الأدب والبلاغة العربية الكلاسيكية';
    unit1Desc = 'دراسة أدبية نقدية لعصور الأدب العربي والبلاغة من تشبيه واستعارة وجناس طباق.';
    unit2Name = 'الوحدة الثانية: قواعد النحو التطببقي والصرف العربي';
    unit2Desc = 'المرفوعات والمنصوبات والمجرورات، والأوزان الصرفية وصياغة المشتقات.';
    lesson1Title = 'الأدب والنقد في العصر العباسي';
    lesson2Title = 'علم البيان: الاستعارة التصريحية والمكنية';
    lesson3Title = 'أحكام النواسخ: إن وأخواتها وكان وأخواتها';
    formulaContent = 'الاسم المرفوع + الخبر المرفوع = الجملة الاسمية المعيارية';
  } else if (subjectId === 'english') {
    unit1Name = 'Unit 1: Advanced Academic Reading & Critical Writing';
    unit1Desc = 'Synthesizing informational texts, understanding rhetorical strategies, and argumentative composition.';
    unit2Name = 'Unit 2: Applied English Grammar & Lexis';
    unit2Desc = 'Tense structures, conditional sentences, active/passive voice, and academic vocabulary.';
    lesson1Title = 'Analyzing Argumentative Texts and Authors Purpose';
    lesson2Title = 'Mastering Present & Past Perfect Aspect in Context';
    lesson3Title = 'Writing Cohesive and Structurally Sound Essays';
    formulaContent = 'Subject + Aux Verb (has/have) + Past Participle (V3)';
  } else if (subjectId === 'islamic') {
    unit1Name = 'الوحدة الأولى: العقيدة والفكر الإسلامي وتطبيقاته';
    unit1Desc = 'ترسيخ المفاهيم الإيمانية والمنهجية الفكرية الصحيحة والوسطية والاعتدال.';
    unit2Name = 'الوحدة الثانية: الفقه وأصوله والآداب الشرعية';
    unit2Desc = 'الأحكام الشرعية للمعاملات المعاصرة والالتزام بالقيم الأخلاقية الإنسانية.';
    lesson1Title = 'الإيمان بقضاء الله وقدره وثمراته';
    lesson2Title = 'منهج الإسلام في حفظ الضرورات الخمس';
    lesson3Title = 'أحكام المعاملات المالية والاقتصاد الإسلامي';
    formulaContent = 'القيم الإسلامية المعتمدة: التسامح والعدالة والسلام الإنساني';
  } else if (subjectId === 'social') {
    unit1Name = 'الوحدة الأولى: تاريخ وجغرافية الخليج العربي والوطن العربي';
    unit1Desc = 'النشوء التاريخي للبلدان، الموارد الاقتصادية والروابط المشتركة والتكامل الإقليمي.';
    unit2Name = 'الوحدة الثانية: تحديات البيئة المعاصرة والتنمية المستدامة';
    unit2Desc = 'الاحتباس الحراري، الأمن المائي والغذائي، ورؤى التطوير والتحول الرقمي.';
    lesson1Title = 'الحضارات القديمة في شبه الجزيرة العربية';
    lesson2Title = 'قيام اتحاد الإمارات والاتحادات الخليجية';
    lesson3Title = 'أهداف التنمية المستدامة واستراتيجيات التحول';
    formulaContent = 'رؤية دول مجلس التعاون الخليجي 2030 - 2050';
  } else if (subjectId === 'computer') {
    unit1Name = 'Unit 1: Fundamentals of Python Programming & Algorithms';
    unit1Desc = 'Core logic flow, loops, arrays, complex conditionals, and problem-solving computational thinking.';
    unit2Name = 'Unit 2: Web Development, Databases & Cybersecurity';
    unit2Desc = 'Introduction to full stack structures, relational databases, networks, and securing information.';
    lesson1Title = 'Control Structures & Loop Optimization';
    lesson2Title = 'Object Oriented Programming (OOP) in Python';
    lesson3Title = 'Database Queries and SQL Integration';
    formulaContent = 'def calculate_efficiency(n): return [x**2 for x in range(n)]';
  }

  const units: Unit[] = [
    {
      id: 1,
      name: unit1Name,
      icon: subjectIcon,
      color: 'from-blue-600 to-indigo-700',
      description: unit1Desc,
      lessons: [
        {
          id: 1,
          title: lesson1Title,
          icon: '📖',
          duration: '45 دقيقة',
          lessonUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-1.1/`,
          examUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-1.1-exam/`,
          lessonTitle: '📖 شرح الدرس التفاعلي',
          examTitle: '📝 اختبار تجريبي ذاتي',
          content: {
            intro: introText,
            sections: [
              {
                title: 'الأفكار والمفاهيم الرئيسية للدرس',
                type: 'bullets',
                content: bulletPoints
              },
              {
                title: 'القوانين والمعادلات المعيارية',
                type: 'formula',
                content: formulaContent
              },
              {
                title: 'جدول مقارنة واستقصاء علمي',
                type: 'table',
                headers: ['العنصر المقارن', 'التفسير والتحليل التربوي', 'المهارة التطبيقية المستهدفة'],
                rows: [
                  [`المفهوم التأسيسي الأول`, `فهم القواعد والربط بين الأجزاء المعرفية`, `تطوير سرعة التذكر وحل الامتحانات`],
                  [`المهارات التحليلية المتقدمة`, `تعميق مهارات الاستدلال الرياضي والمنطقي`, `إجراء عمليات المحاكاة والتأويل الإبداعي`]
                ]
              }
            ]
          }
        },
        {
          id: 2,
          title: lesson2Title,
          icon: '⚡',
          duration: '50 دقيقة',
          lessonUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-1.2/`,
          examUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-1.2-exam/`,
          lessonTitle: '📖 شرح وتحليل التطبيقات',
          examTitle: '📝 تحدي المادة القصير',
          content: {
            intro: `في هذا الدرس، سننتقل إلى حل المسائل ذات المهارات العليا والأنماط الامتحانية الشائعة في ${countryAr}.`,
            sections: [
              {
                title: 'المعادلات والقوانين الحاكمة',
                type: 'formula',
                content: formulaContent + '  |  Y = aX + b'
              },
              {
                title: 'خطوات التحليل العلمي للمسائل والتمارين',
                type: 'bullets',
                content: [
                  'عزل وتحديد المعطيات والمجاهيل بدقة متناهية من رأس السؤال.',
                  'تطبيق القانون الرياضي أو القاعدة المناسبة للموقف العلمي.',
                  'التحقق المنطقي من الوحدات ومنطقية الناتج الرقمي النهائي.',
                  'حل التدريبات الشاملة لتثبيت المعلومة وحصد العلامة الكاملة.'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: unit2Name,
      icon: '🧪',
      color: 'from-purple-600 to-pink-700',
      description: unit2Desc,
      lessons: [
        {
          id: 3,
          title: lesson3Title,
          icon: '📊',
          duration: '60 دقيقة',
          lessonUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-2.1/`,
          examUrl: `https://hesham-afandi.github.io/${country}-${subjectId}-${gradeId}-T${termId}-2.1-exam/`,
          lessonTitle: '📖 حل النماذج التفصيلي',
          examTitle: '📝 الاختبار القصير الشامل',
          content: {
            intro: `نستكشف هنا نماذج اختبارية معيارية لـ ${subjectName} بما يتوافق تماماً مع نظام تقويم المهارات في ${countryAr}.`,
            sections: [
              {
                title: 'تراكيب هامة للمذاكرة',
                type: 'text',
                content: `ينبغي على الطالب التركيز على ربط القوانين وحل مسائل شاملة تغطي أكثر من فكرة في آن واحد لضمان الفهم الشامل والاستعداد الأمثل لاختبارات وزارة التعليم بـ ${countryAr}.`
              }
            ]
          }
        }
      ]
    }
  ];

  return {
    isEnglish: subjectId === 'english' || subjectId === 'computer' || subjectId === 'physics' || subjectId === 'math',
    units
  };
};
