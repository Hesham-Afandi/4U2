import { Curriculum } from '../types';

export const mathOthersCurriculum: Record<string, Curriculum> = {
  'math-11-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: المتجهات',
        icon: '➡️',
        color: 'from-red-500 to-orange-600',
        description: 'دراسة الكميات المتجهة والقياسية، العمليات على المتجهات، الضرب النقطي والضرب المتجهي، والمتجهات في الفضاء ثلاثي الأبعاد.',
        lessons: [
          {
            id: 1, title: '1-1 المقدمة في المتجهات', icon: '➡️', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.1-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتجهات هي كميات لها مقدار واتجاه معاً، تُستخدم في الفيزياء والهندسة لوصف القوة، السرعة، والعجلة.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الكمية القياسية (Scalar): لها مقدار فقط (الكتلة، الزمن، درجة الحرارة)',
                  'الكمية المتجهة (Vector): لها مقدار واتجاه (القوة، السرعة، الإزاحة)',
                  'يُرمز للمتجه بسهم فوق الرمز: AB⃗ أو بحرف غامق: v',
                  'المتجه الصفري: مقداره صفر واتجاهه غير محدد',
                  'متجه الوحدة: متجه مقداره 1 فقط، يُستخدم لتحديد الاتجاه'
                ]},
                { title: 'طول المتجه', type: 'formula', content: '|AB⃗| = المسافة من A إلى B' },
                { title: 'جمع المتجهات', type: 'bullets', content: [
                  'طريقة الرأس للذيل (المثلث)',
                  'طريقة متوازي الأضلاع',
                  'الجمع تبديلي: u + v = v + u',
                  'الجمع تجميعي: (u + v) + w = u + (v + w)'
                ]},
                { title: 'الضرب القياسي لمتجه', type: 'formula', content: '|k·v| = |k|·|v| , الاتجاه يعتمد على إشارة k' },
                { title: 'خصائص المتجهات', type: 'table', headers: ['الخاصية', 'الصيغة'], rows: [
                  ['التبديل', 'u + v = v + u'],
                  ['التجميع', '(u + v) + w = u + (v + w)'],
                  ['العنصر المحايد', 'v + 0 = v'],
                  ['النظير الجمعي', 'v + (-v) = 0'],
                  ['التوزيع', 'k(u + v) = ku + kv']
                ]}
              ]
            }
          },
          {
            id: 2, title: '1-2 المتجهات في المستوى الإحداثي', icon: '📐', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.2-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن تمثيل أي متجه في المستوى الإحداثي بالزوج المرتب <a, b> حيث a المركبة الأفقية و b المركبة الرأسية.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الصيغة الإحداثية: v = <a, b> = a·i + b·j',
                  'طول المتجه: |v| = √(a² + b²)',
                  'زاوية الاتجاه: θ = tan⁻¹(b/a)',
                  'متجه الوحدة: û = v/|v|',
                  'متجه الموضع: من A إلى B: AB⃗ = <B₁-A₁, B₂-A₂>'
                ]},
                { title: 'الصيغة الإحداثية', type: 'formula', content: 'v = <a, b> = a·i + b·j' },
                { title: 'صيغة الطول', type: 'formula', content: '|v| = √(a² + b²)' },
                { title: 'زاوية الاتجاه', type: 'formula', content: 'θ = tan⁻¹(b/a)' },
                { title: 'العمليات الإحداثية', type: 'table', headers: ['العملية', 'الصيغة'], rows: [
                  ['الجمع', '<a₁+a₂, b₁+b₂>'],
                  ['الطرح', '<a₁-a₂, b₁-b₂>'],
                  ['الضرب القياسي', '<ka, kb>'],
                  ['الطول', '√(a² + b²)'],
                  ['الميل', 'b/a']
                ]}
              ]
            }
          },
          {
            id: 3, title: '1-3 الضرب النقطي والإسقاطات', icon: '·', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.3-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الضرب النقطي هو عملية قياسية تقيس مدى توافق متجهين في الاتجاه، وهي أساسية لإيجاد الزوايا والإسقاطات.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الضرب النقطي (جبري): u·v = u₁v₁ + u₂v₂',
                  'الضرب النقطي (هندسي): u·v = |u||v|cos θ',
                  'النتيجة كمية قياسية (رقم)، ليست متجهاً',
                  'إذا كان u·v = 0، فالمتجهان متعامدان',
                  'إسقاط u على v: proj_v u = (u·v/|v|²)v'
                ]},
                { title: 'الضرب النقطي (جبري)', type: 'formula', content: 'u·v = u₁v₁ + u₂v₂' },
                { title: 'الضرب النقطي (هندسي)', type: 'formula', content: 'u·v = |u||v|cos θ' },
                { title: 'إيجاد الزاوية', type: 'formula', content: 'cos θ = (u·v)/(|u||v|)' },
                { title: 'خصائص الضرب النقطي', type: 'table', headers: ['الخاصية', 'الصيغة'], rows: [
                  ['التبديل', 'u·v = v·u'],
                  ['التوزيع', 'u·(v+w) = u·v + u·w'],
                  ['مع نفسه', 'u·u = |u|²'],
                  ['شرط التعامد', 'u·v = 0 ⟺ u ⊥ v'],
                  ['شرط التوازي', '|u·v| = |u||v| ⟺ u ∥ v']
                ]}
              ]
            }
          },
          {
            id: 4, title: '1-4 المتجهات في الفضاء ثلاثي الأبعاد', icon: '🧊', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.4/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.4-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تمتد المتجهات إلى الفضاء ثلاثي الأبعاد بثلاث مركبات، مما يتطلب صيغاً إضافية للطول وزوايا الاتجاه.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'المتجه ثلاثي الأبعاد: v = <a, b, c> = a·i + b·j + c·k',
                  'الطول: |v| = √(a² + b² + c²)',
                  'جيب التمام الاتجاهي: cos α = a/|v|, cos β = b/|v|, cos γ = c/|v|',
                  'متطابقة جيب التمام الاتجاهي: cos²α + cos²β + cos²γ = 1',
                  'صيغة المسافة: d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)'
                ]},
                { title: 'صيغة المتجه ثلاثي الأبعاد', type: 'formula', content: 'v = <a, b, c> = a·i + b·j + c·k' },
                { title: 'الطول في 3D', type: 'formula', content: '|v| = √(a² + b² + c²)' },
                { title: 'جيب التمام الاتجاهي', type: 'formula', content: 'cos α = a/|v|, cos β = b/|v|, cos γ = c/|v|' },
                { title: 'متطابقة جيب التمام الاتجاهي', type: 'formula', content: 'cos²α + cos²β + cos²γ = 1' }
              ]
            }
          },
          {
            id: 5, title: '1-5 الضرب النقطي والضرب المتجهي في Space', icon: '×', duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.5/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.5-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'في الفضاء ثلاثي الأبعاد، ينتج الضرب المتجهي متجهاً عمودياً على متجهين مدخلين، وهو أساسي لحساب المساحات والأحجام والعزوم.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'نتيجة الضرب المتجهي: u × v متجه عمودي على كل من u و v',
                  'الاتجاه: يُحدد بقاعدة اليد اليمنى',
                  'الطول: |u × v| = |u||v|sin θ = مساحة متوازي الأضلاع',
                  'حجم متوازي السطوح: V = |u · (v × w)|',
                  'الضرب المتجهي ضد تبديلي: u × v = -(v × u)'
                ]},
                { title: 'صيغة الضرب المتجهي', type: 'formula', content: 'u × v = |i j k| / |u₁ u₂ u₃| / |v₁ v₂ v₃|' },
                { title: 'مركبات الضرب المتجهي', type: 'formula', content: 'u × v = <u₂v₃-u₃v₂, u₃v₁-u₁v₃, u₁v₂-u₂v₁>' },
                { title: 'الطول', type: 'formula', content: '|u × v| = |u||v|sin θ' },
                { title: 'التطبيقات الهندسية', type: 'table', headers: ['التطبيق', 'الصيغة'], rows: [
                  ['مساحة متوازي الأضلاع', '|u × v|'],
                  ['مساحة المثلث', '½|u × v|'],
                  ['حجم متوازي السطوح', '|u · (v × w)|'],
                  ['العزم', 'τ = r × F']
                ]}
              ]
            }
          },
          {
            id: 6, title: '1-6 خصائص الضرب النقطي والضرب المتجهي', icon: '📏', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.6/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-1.6-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'فهم الخصائص الجبرية للضرب النقطي والضرب المتجهي أساسي لتبسيط التعابير المتجهية وحل المسائل الهندسية.',
              sections: [
                { title: '📋 الملخص والخصائص الأساسية', type: 'bullets', content: [
                  'الضرب النقطي: تبديلي، توزيعي، غير قابل للإلغاء',
                  'الضرب المتجهي: ضد تبديلي، توزيعي، غير تجميعي',
                  'متطابقة لاغرانج: |u × v|² = |u|²|v|² - (u·v)²',
                  'شرط التعامد: u·v = 0',
                  'شرط التوازي: u × v = 0'
                ]},
                { title: 'متطابقة لاغرانج', type: 'formula', content: '|u × v|² = |u|²|v|² - (u·v)²' },
                { title: 'الضرب الثلاثي المتجهي', type: 'formula', content: 'u × (v × w) = (u·w)v - (u·v)w' },
                { title: 'خصائص الضرب النقطي', type: 'table', headers: ['الخاصية', 'الصيغة'], rows: [
                  ['التبديل', 'u·v = v·u'],
                  ['التوزيع', 'u·(v+w) = u·v + u·w'],
                  ['الضرب القياسي', '(ku)·v = k(u·v) = u·(kv)'],
                  ['مع نفسه', 'u·u = |u|² ≥ 0'],
                  ['متجه صفري', '0·u = 0']
                ]},
                { title: 'خصائص الضرب المتجهي', type: 'table', headers: ['الخاصية', 'الصيغة'], rows: [
                  ['ضد التبديل', 'u × v = -(v × u)'],
                  ['التوزيع', 'u × (v+w) = u×v + u×w'],
                  ['الضرب القياسي', '(ku) × v = k(u × v) = u × (kv)'],
                  ['مع نفسه', 'u × u = 0'],
                  ['غير تجميعي', 'u × (v × w) ≠ (u × v) × w']
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: الإحداثيات القطبية والأعداد المركبة',
        icon: '🧭',
        color: 'from-blue-500 to-cyan-600',
        description: 'دراسة النظام القطبي، التمثيلات البيانية، التحويل بين الصور، القطوع المخروطية قطبياً، ونظرية دي موافر.',
        lessons: [
          {
            id: 1, title: '2-1 الإحداثيات القطبية', icon: '📍', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.1-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'النظام القطبي هو نظام إحداثيات بديل عن الديكارتي، يُستخدم لتمثيل النقاط والمنحنيات التي يصعب وصفها بالإحداثيات الديكارتية.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'النقطة القطبية تُحدد بالزوج المرتب (r, θ) حيث r المسافة من القطب و θ الزاوية من المحور القطبي',
                  'التحويل من قطبي إلى ديكارتي: x = r cos θ ، y = r sin θ',
                  'التحويل من ديكارتي إلى قطبي: r² = x² + y² ، tan θ = y/x',
                  'عندما يكون r سالباً: نتحرك |r| في الاتجاه المعاكس للزاوية θ',
                  'التمثيلات المتعددة لنفس النقطة: (r, θ + 2πn) أو (-r, θ + π + 2πn)'
                ]},
                { title: 'التحويل من قطبي إلى ديكارتي', type: 'formula', content: 'x = r cos θ , y = r sin θ' },
                { title: 'التحويل من ديكارتي إلى قطبي', type: 'formula', content: 'r = √(x² + y²) , tan θ = y/x' },
                { title: 'مقارنة بين النظامين', type: 'table', headers: ['النظام الديكارتي', 'النظام القطبي'], rows: [
                  ['يستخدم (x, y)', 'يستخدم (r, θ)'],
                  ['محوران متعامدان', 'مسافة وزاوية من نقطة أصل'],
                  ['كل نقطة لها تمثيل واحد', 'كل نقطة لها تمثيلات لا نهائية'],
                  ['مناسب للخطوط والمستقيمات', 'مناسب للدوائر والمنحنيات الدورية']
                ]}
              ]
            }
          },
          {
            id: 2, title: '2-2 التمثيلات البيانية للمعادلات القطبية', icon: '📈', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.2-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تُنتج المعادلات القطبية أشكالاً هندسية مميزة مثل الدوائر، الليماسون، الورود، والليمنسكيت، ويمكن التعرف على الشكل من صيغة المعادلة مباشرة.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الدوائر: r = a cos θ (مركز على المحور الأفقي)، r = a sin θ (مركز على المحور الرأسي)',
                  'الليماسون: r = a ± b cos/sin θ → a/b < 1 حلقة داخلية، a/b = 1 كارديويد، a/b > 2 محدب',
                  'الورود: r = a cos(nθ) → n فردي: n بتلات، n زوجي: 2n بتلة',
                  'الليمنسكيت: r² = a² cos(2θ) أو r² = a² sin(2θ) شكل ∞',
                  'اختبار التماثل: حول المحور القطبي (θ → -θ)، حول θ=π/2 (θ → π-θ)، حول القطب (r → -r)'
                ]},
                { title: 'أنواع المنحنيات القطبية', type: 'table', headers: ['الصيغة', 'اسم المنحنى', 'عدد البتلات/الشكل'], rows: [
                  ['r = a cos θ', 'دائرة', 'مركز على المحور الأفقي'],
                  ['r = a ± b cos θ', 'ليماسون / كارديويد', 'يعتمد على a/b'],
                  ['r = a cos(nθ)', 'وردة', 'n فردية: n بتلات، n زوجية: 2n'],
                  ['r² = a² cos(2θ)', 'ليمنسكيت', 'شكل ∞']
                ]}
              ]
            }
          },
          {
            id: 3, title: '2-3 الصور القطبية والديكارتية للمعادلات', icon: '🔄', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.3-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن تحويل أي معادلة بين النظامين القطبي والديكارتي باستخدام العلاقات الأساسية، مما يسمح بتحليل المنحنيات بأفضل نظام مناسب.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'العلاقات الأساسية: x = r cos θ ، y = r sin θ ، r² = x² + y² ، tan θ = y/x',
                  'لتحويل ديكارتي → قطبي: عوض x و y بدلالة r و θ ثم بسط',
                  'لتحويل قطبي → ديكارتي: اضرب في r إذا لزم الأمر لاستخدام r² و r cos θ و r sin θ',
                  'حيلة الضرب في r: تستخدم عندما تحتوي المعادلة على r مفرد مع sin أو cos',
                  'متطابقة فيثاغورس: cos²θ + sin²θ = 1 أساسية للتبسيط'
                ]},
                { title: 'العلاقات الأساسية للتحويل', type: 'formula', content: 'x = r cos θ , y = r sin θ , r² = x² + y² , tan θ = y/x' },
                { title: 'خطوات التحويل', type: 'table', headers: ['من ديكارتي إلى قطبي', 'من قطبي إلى ديكارتي'], rows: [
                  ['عوض x = r cos θ و y = r sin θ', 'اضرب الطرفين في r إذا لزم الأمر'],
                  ['بسط باستخدام المتطابقات', 'استبدل r² بـ x²+y² و r cos θ بـ x'],
                  ['حل المعادلة بدلالة r و θ', 'رتب المعادلة بدلالة x و y']
                ]}
              ]
            }
          },
          {
            id: 4, title: '2-4 الصور القطبية للقطوع المخروطية', icon: '∞', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.4/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.4-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن تمثيل جميع القطوع المخروطية (الدائرة، القطع الناقص، المكافئ، الزائد) بصيغة قطبية واحدة تعتمد على الاختلاف المركزي e وموقع الدليل.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الصيغة القياسية: r = ed / (1 ± e cos/sin θ) حيث e الاختلاف المركزي و d مسافة الدليل',
                  'التصنيف: e = 0 دائرة، 0 < e < 1 قطع ناقص، e = 1 قطع مكافئ، e > 1 قطع زائد',
                  'cos في المقام → دليل رأسي، sin في المقام → دليل أفقي',
                  'الإشارة (+) مع cos → دليل يمين القطب، (-) مع cos → دليل يسار القطب',
                  'الإشارة (+) مع sin → دليل فوق القطب، (-) مع sin → دليل تحت القطب'
                ]},
                { title: 'الصيغة القطبية العامة', type: 'formula', content: 'r = ed / (1 ± e cos θ) أو r = ed / (1 ± e sin θ)' },
                { title: 'تصنيف القطوع حسب e', type: 'table', headers: ['قيمة e', 'نوع القطع', 'الشكل'], rows: [
                  ['e = 0', 'دائرة', 'منحنى مغلق دائري'],
                  ['0 < e < 1', 'قطع ناقص', 'بيضاوي مغلق'],
                  ['e = 1', 'قطع مكافئ', 'مفتوح من جانب واحد'],
                  ['e > 1', 'قطع زائد', 'فرعين مفتوحين']
                ]}
              ]
            }
          },
          {
            id: 5, title: '2-5 الأعداد المركبة ونظرية دي موافر', icon: '🔢', duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.5/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-2.5-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تربط نظرية دي موافر بين الأعداد المركبة والدوال المثلثية، وتسمح بحساب القوى والجذور النونية للأعداد المركبة بسهولة تامة.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الصورة القطبية: z = r(cos θ + i sin θ) = r cis θ',
                  'المعيار: r = √(a² + b²)، السعة: θ = tan⁻¹(b/a) مع مراعاة الربع',
                  'الضرب: r₁r₂ cis(θ₁ + θ₂)، القسمة: (r₁/r₂) cis(θ₁ - θ₂)',
                  'نظرية دي موافر: [r cis θ]ⁿ = rⁿ cis(nθ)',
                  'الجذور النونية: wₖ = ⁿ√r · cis((θ + 2πk)/n) حيث k = 0,1,...,n-1'
                ]},
                { title: 'نظرية دي موافر', type: 'formula', content: '[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)' },
                { title: 'صيغة الجذور النونية', type: 'formula', content: 'wₖ = ⁿ√r [cos((θ+2πk)/n) + i sin((θ+2πk)/n)]' },
                { title: 'عمليات الأعداد المركبة بالصورة القطبية', type: 'table', headers: ['العملية', 'القانون'], rows: [
                  ['الضرب', 'r₁r₂ cis(θ₁ + θ₂)'],
                  ['القسمة', '(r₁/r₂) cis(θ₁ - θ₂)'],
                  ['الرفع لأس n', 'rⁿ cis(nθ)'],
                  ['الجذر النوني', 'ⁿ√r cis((θ+2πk)/n)']
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: المتتاليات والمتسلسلات',
        icon: '∑',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة المتتاليات كدوال، الحسابية والهندسية، الرمز سيجما، المتسلسلة اللانهائية، ذات الحدين، والاستقراء الرياضي.',
        lessons: [
          {
            id: 1, title: '3-1 المتتاليات كدوال', icon: '📊', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.1-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتتالية هي دالة مجالها مجموعة الأعداد الطبيعية، ويمكن تعريفها بصيغة صريحة تعتمد على n مباشرة، أو بصيغة تكرارية تعتمد على الحد السابق.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'المتتالية هي دالة مجالها ℕ (أو جزء منه) ومداه مجموعة أعداد حقيقية',
                  'المتتالية الصريحة: aₙ = f(n) تعتمد على رقم الحد n مباشرة',
                  'المتتالية التكرارية: aₙ = f(aₙ₋₁) تعتمد على الحد السابق مع تحديد a₁',
                  'المتتالية الحسابية: فرق ثابت d بين كل حدين متتاليين',
                  'المتتالية الهندسية: نسبة ثابتة r بين كل حدين متتاليين'
                ]},
                { title: 'مقارنة بين الصيغتين', type: 'table', headers: ['الصيغة الصريحة', 'الصيغة التكرارية'], rows: [
                  ['aₙ = f(n)', 'aₙ = f(aₙ₋₁)'],
                  ['تعتمد على n مباشرة', 'تعتمد على الحد السابق'],
                  ['يمكن حساب أي حد مباشرة', 'يجب حساب الحدود السابقة تباعاً'],
                  ['مثال: aₙ = 3n - 1', 'مثال: aₙ = aₙ₋₁ + 3']
                ]}
              ]
            }
          },
          {
            id: 2, title: '3-2 المتتاليات والمتسلسلات والرمز سيجما', icon: '∑', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.2-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتسلسلة هي مجموع حدود المتتالية، ويُستخدم رمز سيجما Σ لكتابة هذا المجموع بصورة مختصرة ودقيقة.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'المتسلسلة هي مجموع حدود المتتالية: Sₙ = a₁ + a₂ + ... + aₙ',
                  'رمز سيجما: Σ(k=1 to n) aₖ يمثل المجموع باختصار',
                  'إذا بدأ العداد من k=0 فعدد الحدود = n+1 وليس n',
                  'المتسلسلة المنتهية لها عدد محدد من الحدود',
                  'المتسلسلة غير المنتهية تستمر إلى ما لا نهاية وتتطلب شرط تقارب'
                ]},
                { title: 'صيغة رمز سيجما', type: 'formula', content: 'Σ(k=1 to n) aₖ = a₁ + a₂ + a₃ + ... + aₙ' },
                { title: 'خصائص سيجما', type: 'table', headers: ['الخاصية', 'الصيغة'], rows: [
                  ['ثابت مضروب', 'Σ c·aₖ = c · Σ aₖ'],
                  ['مجموع فرق', 'Σ (aₖ ± bₖ) = Σ aₖ ± Σ bₖ'],
                  ['ثابت فقط', 'Σ(k=1 to n) c = n·c'],
                  ['بدء من 0', 'Σ(k=0 to n) aₖ = a₀ + Σ(k=1 to n) aₖ']
                ]}
              ]
            }
          },
          {
            id: 3, title: '3-3 المتتاليات والمتسلسلات الحسابية', icon: '➕', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.3-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتتالية الحسابية تتزايد أو تتناقص بمقدار ثابت d، ولها قوانين مباشرة لإيجاد أي حد وحساب المجموع.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الأساس: d = a₂ - a₁ = a₃ - a₂ (فرق ثابت)',
                  'الحد العام: aₙ = a₁ + (n-1)d',
                  'المجموع (مع معرفة aₙ): Sₙ = n/2 (a₁ + aₙ)',
                  'المجموع (بدون aₙ): Sₙ = n/2 [2a₁ + (n-1)d]',
                  'الوسط الحسابي: إدراج k حدود بين a و b → d = (b-a)/(k+1)'
                ]},
                { title: 'الحد العام', type: 'formula', content: 'aₙ = a₁ + (n-1)d' },
                { title: 'المجموع', type: 'formula', content: 'Sₙ = n/2 (a₁ + aₙ) = n/2 [2a₁ + (n-1)d]' },
                { title: 'الوسط الحسابي', type: 'formula', content: 'd = (b - a) / (k + 1)' }
              ]
            }
          },
          {
            id: 4, title: '3-4 المتتاليات والمتسلسلات الهندسية', icon: '✖️', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.4/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.4-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتتالية الهندسية تتزايد أو تتناقص بنسبة ثابتة r، ولها قوانين خاصة للحد العام والمجموع المنتهي.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'الأساس: r = a₂/a₁ = a₃/a₂ (نسبة ثابتة)',
                  'الحد العام: aₙ = a₁ · rⁿ⁻¹',
                  'المجموع المنتهي: Sₙ = a₁(1 - rⁿ)/(1 - r) عندما r ≠ 1',
                  'المجموع (مع معرفة aₙ): Sₙ = (a₁ - aₙ·r)/(1 - r)',
                  'الوسط الهندسي: إدراج k حدود بين a و b → rᵏ⁺¹ = b/a'
                ]},
                { title: 'الحد العام', type: 'formula', content: 'aₙ = a₁ · rⁿ⁻¹' },
                { title: 'المجموع المنتهي', type: 'formula', content: 'Sₙ = a₁(1 - rⁿ) / (1 - r) , r ≠ 1' },
                { title: 'الوسط الهندسي', type: 'formula', content: 'r\u1d4f\u207a\u00b9 = b / a' }
              ]
            }
          },
          {
            id: 5, title: '3-5 المتسلسلة الهندسية اللانهائية', icon: '♾️', duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.5/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.5-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتسلسلة الهندسية اللانهائية لها مجموع محدد فقط عندما يكون |r| < 1، وتُستخدم في تحويل الكسور العشرية الدورية وحساب المسافات الكلية.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'شرط التقارب: |r| < 1 (القيمة المطلقة للأساس أقل من 1)',
                  'قانون المجموع: S∞ = a₁ / (1 - r)',
                  'إذا كان |r| ≥ 1 فالمتسلسلة متباعدة ولا يوجد مجموع',
                  'تطبيق الكسور العشرية الدورية: 0.abab... = ab/99',
                  'الإشارات المتناوبة تعني أن r سالب، والمقام يصبح (1 + |r|)'
                ]},
                { title: 'شرط التقارب', type: 'formula', content: '|r| < 1' },
                { title: 'المجموع اللانهائي', type: 'formula', content: 'S∞ = a₁ / (1 - r)' },
                { title: 'تحويل الكسور الدورية', type: 'table', headers: ['الكسر الدوري', 'الكسر الاعتيادي'], rows: [
                  ['0.333...', '3/9 = 1/3'],
                  ['0.6363...', '63/99 = 7/11'],
                  ['0.14545...', '1/10 + 45/990'],
                  ['0.999...', '9/9 = 1']
                ]}
              ]
            }
          },
          {
            id: 6, title: '3-6 التكرار والإعادة', icon: '🔁', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.6/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.6-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التكرار هو تطبيق دالة على ناتجها بشكل متكرر، ويُستخدم في نمذجة القروض والادخار والنمو السكاني.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  'التكرار: xₙ+₁ = f(xₙ) تطبيق دالة على ناتجها بشكل متكرر',
                  'خاصية ANS في الآلة الحاسبة تسرع حساب الحدود التكرارية',
                  'المتتالية التكرارية تحتاج تحديد a₁ وقاعدة التكرار',
                  'في مسائل القروض: aₙ = (1+r)aₙ-₁ - P حيث r الفائدة و P القسط',
                  'انتبه لترقيم الحدود: a₀ هو الرصيد الأولي، a₆ بعد 6 أشهر'
                ]},
                { title: 'صيغة التكرار', type: 'formula', content: 'x\u207f\u207a\u00b9 = f(x\u207f)' },
                { title: 'نموذج القروض', type: 'formula', content: 'a\u207f = (1 + r)a\u207f\u207b\u00b9 - P' },
                { title: 'نصائح مهمة', type: 'bullets', content: [
                  'استخدم زر ANS لتجنب إعادة الكتابة',
                  'a₀ هو القيمة الابتدائية قبل أي فترة',
                  'بعد n فترة نحتاج حساب aₙ وليس aₙ-₁',
                  'تحقق من وحدة الفائدة (سنوية/شهرية)'
                ]}
              ]
            }
          },
          {
            id: 7, title: '3-7 نظرية ذات الحدين', icon: '📜', duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.7/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.7-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نظرية ذات الحدين تسمح بفك (a+b)ⁿ لأي أس n باستخدام التوافيق أو مثلث باسكال لإيجاد المعاملات.',
              sections: [
                { title: '📋 الملخص والقوانين الأساسية', type: 'bullets', content: [
                  '(a+b)ⁿ = Σ(k=0 to n) C(n,k) · aⁿ⁻ᵏ · bᵏ',
                  'عدد الحدود = n + 1، مجموع الأسس في كل حد = n',
                  'معامل الحد: C(n,k) = n! / [k!(n-k)!]',
                  'مثلث باسكال يعطي المعاملات بدون حساب التوافيق',
                  'في (a-b)ⁿ الإشارات تتناوب (+, -, +, -, ...)',
                  'الحد الخامس يعني k = 4 لأن العد يبدأ من k = 0'
                ]},
                { title: 'نظرية ذات الحدين', type: 'formula', content: '(a+b)\u207f = \u03a3(k=0 to n) C(n,k) · a\u207f\u207b\u1d4f · b\u1d4f' },
                { title: 'التوافيق', type: 'formula', content: 'C(n,k) = n! / [k!(n-k)!]' },
                { title: 'مثلث باسكال', type: 'table', headers: ['n', 'المعاملات'], rows: [
                  ['0', '1'],
                  ['1', '1 1'],
                  ['2', '1 2 1'],
                  ['3', '1 3 3 1'],
                  ['4', '1 4 6 4 1'],
                  ['5', '1 5 10 10 5 1']
                ]}
              ]
            }
          },
          {
            id: 8, title: '3-8 البرهان بالاستقراء الرياضي', icon: '🪜', duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.8/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.8-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'البرهان بالاستقراء الرياضي يعتمد على إثبات صحة قاعدة لجميع الأعداد الصحيحة بالاعتماد على خطوة أساسية وخطوة استقرائية.',
              sections: [
                { title: '📋 خطوات البرهان', type: 'bullets', content: [
                  'الخطوة الأولى: إثبات صحة العبارة عندما n = 1 (الأساس)',
                  'الخطوة الثانية: فرض صحة العبارة عندما n = k (الفرض الاستقرائي)',
                  'الخطوة الثالثة: إثبات صحة العبارة عندما n = k + 1 بالاعتماد على الفرض'
                ]}
              ]
            }
          },
          {
            id: 9, title: '3-9 الدوال في صورة متسلسلة لا نهائية', icon: '🌊', duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.9/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-math-T3-3.9-exam/',
            lessonTitle: '📖 شرح الدرس', examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن تمثيل بعض الدوال كمتسلسلات لا نهائية مثل دوال الجيب وجيب التمام والدالة الأسية.',
              sections: [
                { title: '📋 متسلسلات ماكلورين الشهيرة', type: 'bullets', content: [
                  'eˣ = 1 + x + x²/2! + x³/3! + ...',
                  'sin x = x - x³/3! + x⁵/5! - ...',
                  'cos x = 1 - x²/2! + x⁴/4! - ...'
                ]}
              ]
            }
          }
        ]
      }
    ]
  },
  'math-11-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: Vectors',
        icon: '➡️',
        color: 'from-red-500 to-orange-600',
        description: 'Study of vector and scalar quantities, vector operations, dot product and cross product, and vectors in three-dimensional space.',
        lessons: [
          {
            id: 1, title: '7-1 Introduction to Vectors', icon: '➡️', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.1-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Vectors are quantities with both magnitude and direction, used in physics and engineering to describe force, velocity, and acceleration.',
              sections: [
                { title: '📋 Summary & Key Concepts', type: 'bullets', content: [
                  'Scalar quantity: has only magnitude (mass, time, temperature)',
                  'Vector quantity: has magnitude and direction (force, velocity, displacement)',
                  'Vector notation: arrow above symbol AB⃗ or bold letter v',
                  'Zero vector: magnitude zero, direction undefined',
                  'Unit vector: vector with magnitude 1 only, used to specify direction'
                ]},
                { title: 'Vector Magnitude', type: 'formula', content: '|v| = √(v₁² + v₂²)' },
                { title: 'Vector Operations', type: 'bullets', content: [
                  'Vector Addition: u + v = <u₁+v₁, u₂+v₂>',
                  'Scalar Multiplication: k·v = <kv₁, kv₂>',
                  'Commutative: u + v = v + u',
                  'Associative: (u + v) + w = u + (v + w)'
                ]}
              ]
            }
          },
          {
            id: 2, title: '7-2 Vectors in the Coordinate Plane', icon: '📐', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.2-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Vectors can be represented in component form using coordinates, allowing precise calculations of magnitude and direction.',
              sections: [
                { title: '📋 Summary & Key Formulas', type: 'bullets', content: [
                  'Component form: v = <v₁, v₂> = v₁i + v₂j',
                  'Magnitude: |v| = √(v₁² + v₂²)',
                  'Direction angle: θ = tan⁻¹(v₂/v₁)',
                  'Unit vector: û = v/|v|'
                ]}
              ]
            }
          },
          {
            id: 3, title: '7-3 Dot Product and Projections', icon: '·', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.3-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The dot product is a scalar operation that measures how much two vectors point in the same direction, essential for finding angles and projections.',
              sections: [
                { title: '📋 Summary & Key Formulas', type: 'bullets', content: [
                  'Dot product (algebraic): u·v = u₁v₁ + u₂v₂',
                  'Dot product (geometric): u·v = |u||v|cos θ',
                  'If u·v = 0, vectors are orthogonal (perpendicular)'
                ]}
              ]
            }
          },
          {
            id: 4, title: '7-4 Vectors in Three-Dimensional Space', icon: '🧊', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.4/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.4-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Vectors extend to three-dimensional space with three components, requiring additional formulas for magnitude and direction angles.',
              sections: [
                { title: '📋 Summary & Key Formulas', type: 'bullets', content: [
                  '3D vector: v = <v₁, v₂, v₃> = v₁i + v₂j + v₃k',
                  'Magnitude: |v| = √(v₁² + v₂² + v₃²)'
                ]}
              ]
            }
          },
          {
            id: 5, title: '7-5 Dot and Cross Product in Space', icon: '×', duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.5/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.5-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'In 3D space, the cross product creates a vector perpendicular to two input vectors, essential for calculating areas, volumes, and torques.',
              sections: [
                { title: '📋 Summary & Key Formulas', type: 'bullets', content: [
                  'Cross product result: u × v is a vector perpendicular to both u and v',
                  'Magnitude: |u × v| = |u||v|sin θ = area of parallelogram'
                ]}
              ]
            }
          },
          {
            id: 6, title: '7-6 Properties of Dot and Cross Product', icon: '📏', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.6/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-1.6-exam/',
            lessonTitle: '📖 Lesson Explanation', examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Understanding the algebraic properties of dot and cross products is essential for simplifying vector expressions.',
              sections: [
                { title: '📋 Key Properties', type: 'bullets', content: [
                  'Dot product is commutative: u·v = v·u',
                  'Cross product is anti-commutative: u × v = -(v × u)'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Polar Coordinates & Complex Numbers',
        icon: '🧭',
        color: 'from-blue-500 to-cyan-600',
        description: 'Polar coordinate system, graphing polar equations, converting between forms, conics in polar form, and De Moivre\'s Theorem.',
        lessons: [
          {
            id: 1, title: '8-1 Polar Coordinates', icon: '📍', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.1/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.1-exam/',
            content: {
              intro: 'The polar coordinate system is an alternative to Cartesian coordinates, used to represent points using distance and angle.',
              sections: [
                { title: '📋 Summary', type: 'bullets', content: [
                  'Polar point: (r, θ)',
                  'Polar to Rectangular: x = r cos θ, y = r sin θ',
                  'Rectangular to Polar: r² = x² + y², tan θ = y/x'
                ]}
              ]
            }
          },
          {
            id: 2, title: '8-2 Graphs of Polar Equations', icon: '📈', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.2/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.2-exam/',
            content: {
              intro: 'Polar equations produce unique shapes like circles, cardioids, and rose curves.',
              sections: [
                { title: '📋 Shapes Overview', type: 'bullets', content: [
                  'Cardioid: r = a(1 + cos θ)',
                  'Rose curve: r = a cos nθ'
                ]}
              ]
            }
          },
          {
            id: 3, title: '8-3 Polar & Rectangular Forms', icon: '🔄', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.3/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.3-exam/',
            content: {
              intro: 'Converting equations between polar and rectangular systems using coordinate formulas.',
              sections: [
                { title: '📋 Conversion Formulas', type: 'bullets', content: [
                  'x = r cos θ',
                  'y = r sin θ',
                  'x² + y² = r²'
                ]}
              ]
            }
          },
          {
            id: 4, title: '8-4 Polar Forms of Conic Sections', icon: '∞', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.4/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.4-exam/',
            content: {
              intro: 'Conic sections represented in polar coordinates using eccentricity and directrix.',
              sections: [
                { title: '📋 Conic Polar Equation', type: 'formula', content: 'r = ed / (1 ± e cos θ)' }
              ]
            }
          },
          {
            id: 5, title: '8-5 Complex Numbers & De Moivre\'s Theorem', icon: '🔢', duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.5/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-2.5-exam/',
            content: {
              intro: 'Powers and roots of complex numbers using polar form and De Moivre\'s Theorem.',
              sections: [
                { title: "De Moivre's Theorem", type: 'formula', content: 'zⁿ = rⁿ(cos nθ + i sin nθ)' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Unit 3: Sequences & Series',
        icon: '∑',
        color: 'from-purple-500 to-pink-600',
        description: 'Sequences as functions, arithmetic & geometric sequences and series, infinite series, binomial theorem, and induction.',
        lessons: [
          {
            id: 1, title: '9-1 Sequences as Functions', icon: '📊', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.1/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.1-exam/',
            content: {
              intro: 'Introduction to sequences as functions defined on natural numbers.',
              sections: [
                { title: '📋 Sequence Types', type: 'bullets', content: [
                  'Arithmetic: constant difference',
                  'Geometric: constant ratio'
                ]}
              ]
            }
          },
          {
            id: 2, title: '9-2 Sequences, Series & Sigma Notation', icon: '∑', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.2/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.2-exam/',
            content: {
              intro: 'Expressing the summation of sequence terms using Sigma notation.',
              sections: [
                { title: 'Sigma Notation', type: 'formula', content: 'Σ(k=1 to n) aₖ' }
              ]
            }
          },
          {
            id: 3, title: '9-3 Arithmetic Sequences & Series', icon: '➕', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.3/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.3-exam/',
            content: {
              intro: 'Formulas for arithmetic sequence terms and summation of arithmetic series.',
              sections: [
                { title: 'Arithmetic Term', type: 'formula', content: 'aₙ = a₁ + (n-1)d' },
                { title: 'Arithmetic Sum', type: 'formula', content: 'Sₙ = (n/2)(a₁ + aₙ)' }
              ]
            }
          },
          {
            id: 4, title: '9-4 Geometric Sequences & Series', icon: '✖️', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.4/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.4-exam/',
            content: {
              intro: 'Formulas for geometric sequence terms and finite geometric series.',
              sections: [
                { title: 'Geometric Term', type: 'formula', content: 'aₙ = a₁ · rⁿ⁻¹' },
                { title: 'Geometric Sum', type: 'formula', content: 'Sₙ = a₁(1 - rⁿ) / (1 - r)' }
              ]
            }
          },
          {
            id: 5, title: '9-5 Infinite Geometric Series', icon: '♾️', duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.5/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.5-exam/',
            content: {
              intro: 'Convergence criteria and sum formula for infinite geometric series.',
              sections: [
                { title: 'Sum to Infinity', type: 'formula', content: 'S_inf = a₁ / (1 - r) (for |r| < 1)' }
              ]
            }
          },
          {
            id: 6, title: '9-6 Iteration & Recursion', icon: '🔁', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.6/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.6-exam/',
            content: {
              intro: 'Understanding recursive processes and the iteration of functions.',
              sections: [
                { title: 'Iteration', type: 'formula', content: 'xₙ₊₁ = f(xₙ)' }
              ]
            }
          },
          {
            id: 7, title: '9-7 Binomial Theorem', icon: '📜', duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.7/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.7-exam/',
            content: {
              intro: 'Expansion of algebraic powers of binominal terms using combinations.',
              sections: [
                { title: 'Binomial Theorem', type: 'formula', content: '(a+b)ⁿ = Σ(k=0 to n) C(n,k) aⁿ⁻ᵏ bᵏ' }
              ]
            }
          },
          {
            id: 8, title: '9-8 Proof by Mathematical Induction', icon: '🪜', duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.8/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.8-exam/',
            content: {
              intro: 'Rigorous mathematical proof method based on base case and inductive step.',
              sections: [
                { title: 'Inductive Step', type: 'text', content: 'Prove that if P(k) is true, then P(k+1) is true.' }
              ]
            }
          },
          {
            id: 9, title: '9-9 Functions as Infinite Series', icon: '🌊', duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.9/', examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-math-T3-3.9-exam/',
            content: {
              intro: 'Maclaurin and Taylor series representation of fundamental transcendental functions.',
              sections: [
                { title: 'Exponential Series', type: 'formula', content: 'eˣ = Σ(n=0 to inf) xⁿ / n!' }
              ]
            }
          }
        ]
      }
    ]
  },
  'math-10-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: الدوال والعلاقات النسبية',
        icon: '📊',
        color: 'from-blue-500 to-cyan-600',
        description: 'دراسة التعابير النسبية وعملياتها الأساسية، تمثيل الدوال النسبية بيانياً، وحل المعادلات والمتباينات النسبية.',
        lessons: [
          {
            id: 1,
            title: 'الدرس الأول: ضرب التعابير النسبية وقسمتها',
            icon: '✖️',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التعابير النسبية هي كسور تحتوي على متغيرات في البسط أو المقام. في هذا الدرس، نتعلم قواعد ضرب وقسمة هذه التعابير وكيفية تبسيطها.',
              sections: [
                { title: 'قاعدة الضرب', type: 'formula', content: '(A/B) × (C/D) = (A×C) / (B×D)' },
                { title: 'قاعدة القسمة', type: 'formula', content: '(A/B) ÷ (C/D) = (A/B) × (D/C) = (A×D) / (B×C)' },
                { title: 'خطوات التبسيط', type: 'bullets', content: [
                  'تحليل البسط والمقام إلى عواملهما الأولية.',
                  'اختصار العوامل المشتركة بين البسط والمقام.',
                  'التأكد من أن المقام لا يساوي صفراً (شروط المنع).',
                  'ضرب أو قسمة البسط في البسط والمقام في المقام.'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس الثاني: جمع وطرح التعابير النسبية',
            icon: '➕',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'لجمع أو طرح كسور نسبية، يجب أولاً إيجاد المقام المشترك الأصغر (LCD) ثم توحيد المقامات.',
              sections: [
                { title: 'المقام المشترك الأصغر (LCD)', type: 'text', content: 'هو أصغر تعبير يمكن قسمته على جميع المقامات بدون باقٍ. يُوجد بأخذ العوامل المشتركة بأعلى أس.' },
                { title: 'خطوات الجمع والطرح', type: 'bullets', content: [
                  'تحليل جميع المقامات إلى عوامل.',
                  'إيجاد المقام المشترك الأصغر (LCD).',
                  'ضرب كل كسر في العامل الناقص للوصول إلى LCD.',
                  'جمع أو طرح البسط مع الإبقاء على المقام الموحد.',
                  'تبسيط الناتج النهائي إن أمكن.'
                ]},
                { title: 'مثال تطبيقي', type: 'text', content: '1/(x+2) + 1/(x-2) = [(x-2) + (x+2)] / [(x+2)(x-2)] = 2x / (x²-4)' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس الثالث: تمثيل دوال المقلوب بيانياً',
            icon: '📈',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدالة المقلوب الأساسية هي f(x) = 1/x. منحنى هذه الدالة يسمى القطع الزائد (Hyperbola) وله خصائص مميزة.',
              sections: [
                { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = a/(x - h) + k' },
                { title: 'الخطوط المقاربة (Asymptotes)', type: 'bullets', content: [
                  'الخط المقارب الرأسي: x = h (حيث المقام = صفر).',
                  'الخط المقارب الأفقي: y = k (قيمة الدالة عندما x → ∞).',
                  'المنحنى يقترب من هذه الخطوط لكن لا يلمسها أبداً.'
                ]}
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس الرابع: التمثيل البياني للدوال النسبية',
            icon: '📉',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدوال النسبية العامة هي على الصورة f(x) = P(x)/Q(x) حيث P و Q كثيرات حدود. تحليلها يتطلب دراسة شاملة للسلوك.',
              sections: [
                { title: 'خطوات الرسم', type: 'bullets', content: [
                  'تبسيط الدالة بأقصى حد ممكن (اختصار العوامل المشتركة).',
                  'إيجاد الخطوط المقاربة الرأسية (أصفار المقام غير الملغاة).',
                  'إيجاد الخطوط المقاربة الأفقية (مقارنة درجات البسط والمقام).'
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس الخامس: دوال التغير',
            icon: '🔄',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'دوال التغير تصف العلاقة بين كميتين متغيرتين. هناك ثلاثة أنواع رئيسية: التغير المباشر، التغير العكسي، والتغير المشترك.',
              sections: [
                { title: 'التغير المباشر', type: 'formula', content: 'y = kx' },
                { title: 'التغير العكسي', type: 'formula', content: 'y = k/x' }
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس السادس: حل المعادلات النسبية والمتباينات',
            icon: '⚖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.6/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-1.6-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المعادلات النسبية تحتوي على متغيرات في المقام. حلها يتطلب الحذر من الحلول الدخيلة التي تجعل المقام صفراً.',
              sections: [
                { title: 'خطوات حل المعادلات النسبية', type: 'bullets', content: [
                  'تحديد شروط المنع (قيم x التي تجعل أي مقام = صفر).',
                  'ضرب طرفي المعادلة في المقام المشترك الأصغر (LCD).',
                  'حل المعادلة الناتجة وفحص الحلول واستبعاد الحلول الدخيلة.'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: الدوال المثلثية',
        icon: '📐',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة النسب المثلثية في المثلثات القائمة والزوايا العامة، قوانين الجيب وجيب التمام، والدوال الدائرية والدورية.',
        lessons: [
          {
            id: 1,
            title: 'الدرس الأول: النسب المثلثية في المثلثات القائمة',
            icon: '📐',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'النسب المثلثية الستة تربط بين زوايا المثلث القائم وأضلاعه. هذه النسب هي الأساس لحل مسائل المثلثات.',
              sections: [
                { title: 'النسب الأساسية', type: 'bullets', content: [
                  'Sin(θ) = المقابل / الوتر',
                  'Cos(θ) = المجاور / الوتر',
                  'Tan(θ) = المقابل / المجاور'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس الثاني: الزوايا وقياس الزاوية',
            icon: '📏',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن قياس الزوايا بوحدتين مختلفتين: الدرجات والراديان. الراديان هو الوحدة الطبيعية في الرياضيات المتقدمة.',
              sections: [
                { title: 'التحويل بين الدرجات والراديان', type: 'formula', content: 'الراديان = الدرجات × (π/180)' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس الثالث: النسب المثلثية للزوايا العامة',
            icon: '🔄',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الزوايا العامة يمكن أن تكون في أي ربع من أرباع دائرة الوحدة. نستخدم الزاوية المرجعية لإيجاد قيم النسب المثلثية.',
              sections: [
                { title: 'الزاوية المرجعية', type: 'text', content: 'هي الزاوية الحادة بين الضلع النهائي ومحور x.' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس الرابع: قانون Sine',
            icon: '📊',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قانون الجيب يربط بين أضلاع المثلث وجيوب زواياها المقابلة. يُستخدم لحل المثلثات غير القائمة.',
              sections: [
                { title: 'صيغة قانون الجيب', type: 'formula', content: 'a/sin(A) = b/sin(B) = c/sin(C)' }
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس الخامس: قانون Cosine',
            icon: '📊',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قانون جيب التمام هو تعميم لنظرية فيثاغورس للمثلثات غير القائمة. يربط بين الأضلاع والزوايا.',
              sections: [
                { title: 'صيغة قانون جيب التمام', type: 'formula', content: 'c² = a² + b² - 2ab·cos(C)' }
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس السادس: الدوال الدائرية والدورية',
            icon: '⭕',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.6/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.6-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدوال المثلثية هي دوال دورية تتكرر قيمها على فترات منتظمة. الدورية هي الخاصية الأساسية التي تميز هذه الدوال.',
              sections: [
                { title: 'الدورية (Period)', type: 'text', content: 'Sin(x) و Cos(x): الدور = 2π' }
              ]
            }
          },
          {
            id: 7,
            title: 'الدرس السابع: تمثيل الدوال المثلثية بيانياً',
            icon: '📈',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.7/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.7-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الصيغة العامة للدوال المثلثية المحولة هي y = A·sin(B(x - C)) + D.',
              sections: [
                { title: 'المعاملات', type: 'bullets', content: [
                  'السعة: |A|',
                  'الدورة: 2π/|B|'
                ]}
              ]
            }
          },
          {
            id: 8,
            title: 'الدرس الثامن: إزاحة التمثيلات البيانية للدوال المثلثية',
            icon: '↔️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.8/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.8-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'فهم تأثير كل معامل في الصيغة العامة على شكل وموقع المنحنى المثلثي.',
              sections: [
                { title: 'إزاحة الطور', type: 'text', content: 'إزاحة أفقية بمقدار C وحدة.' }
              ]
            }
          },
          {
            id: 9,
            title: 'الدرس التاسع: الدوال المثلثية العكسية',
            icon: '🔁',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.9/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-2.9-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدوال المثلثية العكسية تعكس العلاقة: بدلاً من إيجاد النسبة من الزاوية، نجد الزاوية من النسبة.',
              sections: [
                { title: 'الدوال العكسية', type: 'bullets', content: [
                  'sin⁻¹(x) = arcsin(x)',
                  'cos⁻¹(x) = arccos(x)'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: المتطابقات والمعادلات المثلثية',
        icon: '🔢',
        color: 'from-emerald-500 to-teal-600',
        description: 'دراسة المتطابقات المثلثية الأساسية وإثباتها، متطابقات مجموع الزاويتين، ومتطابقات ضعف الزاوية ونصفها، وحل المعادلات المثلثية.',
        lessons: [
          {
            id: 1,
            title: 'الدرس الأول: المتطابقات المثلثية',
            icon: '🔢',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المتطابقة المثلثية هي معادلة صحيحة لجميع قيم المتغير. المتطابقات الأساسية تنشأ من التعريفات ونظرية فيثاغورس.',
              sections: [
                { title: 'متطابقات فيثاغورس', type: 'formula', content: 'sin²(θ) + cos²(θ) = 1' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس الثاني: إثبات صحة المتطابقات المثلثية',
            icon: '✅',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'إثبات المتطابقات يتطلب تحويل أحد الطرفين أو كلاهما باستخدام المتطابقات المعروفة حتى يتساوى الطرفان.',
              sections: [
                { title: 'استراتيجيات الإثبات', type: 'text', content: 'ابدأ بالطرف الأكثر تعقيداً وقم بتحويله باستخدام المتطابقات.' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس الثالث: متطابقات مجموع زاويتين والفرق بينهما',
            icon: '➕',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'هذه المتطابقات تربط بين الدوال المثلثية لمجموع أو فرق زاويتين والدوال المثلثية لكل زاوية على حدة.',
              sections: [
                { title: 'متطابقة جيب التمام للجمع', type: 'formula', content: 'cos(A + B) = cos(A)cos(B) - sin(A)sin(B)' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس الرابع: متطابقات ضعف الزاوية ونصفها',
            icon: '✖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'متطابقات ضعف الزاوية هي حالات خاصة من متطابقات الجمع عندما A = B. متطابقات نصف الزاوية تُشتق منها.',
              sections: [
                { title: 'جيب ضعف الزاوية', type: 'formula', content: 'sin(2A) = 2·sin(A)·cos(A)' }
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس الخامس: المعادلات المثلثية',
            icon: '⚖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-math-T3-3.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المعادلات المثلثية تحتوي على دوال مثلثية لمجهول زاوي. حلها يتطلب استخدام المتطابقات والعكس للدوال المثلثية.',
              sections: [
                { title: 'مثال حل معادلة', type: 'text', content: 'حل المعادلة sin(x) = 1/2 يعطي زاوية مرجعية 30 درجة.' }
              ]
            }
          }
        ]
      }
    ]
  }
};
