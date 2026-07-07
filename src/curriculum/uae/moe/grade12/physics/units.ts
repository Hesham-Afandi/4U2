import { Curriculum } from '../../../../../types';

export const physics12Curriculum: Record<string, Curriculum> = {
  'physics-12-bridge-1': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: القوى الكهروستاتيكية',
        icon: '⚡',
        color: 'from-blue-500 to-cyan-600',
        description: 'دراسة الشحنة الكهربائية، طرق الشحن، قانون كولوم، والقوة الكهروستاتيكية بين الشحنات',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: الكهرومغناطيسية - الشحنة الكهربائية',
            icon: '🔋',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-1.1-1.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-1.1-1.4-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الكهرومغناطيسية هي أحد فروع الفيزياء التي تدرس الظواهر الكهربائية والمغناطيسية. تبدأ رحلتنا بفهم الشحنة الكهربائية - إحدى الخصائص الأساسية للمادة التي تُسبب القوى الكهربائية.',
              sections: [
                { title: '📋 مفهوم الشحنة الكهربائية', type: 'bullets', content: [
                  'الشحنة الكهربائية (Electric Charge): خاصية أساسية للمادة تُسبب تفاعلها مع المجالات الكهرومغناطيسية',
                  'رمز الشحنة: Q أو q وتقاس بوحدة الكولوم (Coulomb - C)',
                  'هناك نوعان من الشحنات: موجبة (+) وسالبة (-)',
                  'الشحنات المتشابهة تتنافر، والمختلفة تتجاذب',
                  'الشحنة الأولية: e = 1.6 × 10⁻¹⁹ C (شحنة الإلكترون سالبة، والبروتون موجبة)'
                ]},
                { title: 'قانون حفظ الشحنة الكهربية', type: 'formula', content: 'ΣQ قبل = ΣQ بعد (الشحنة لا تُفنى ولا تُستحدث)' },
                { title: 'تكميم الشحنة (Quantization)', type: 'formula', content: 'Q = n·e (حيث n عدد صحيح، e = 1.6 × 10⁻¹⁹ C)' },
                { title: '📋 طرق شحن الأجسام', type: 'table', headers: ['الطريقة', 'الآلية', 'مثال'], rows: [
                  ['الشحن بالدلك (Friction)', 'انتقال الإلكترونات بالاحتكاك', 'دلك الزجاج بالحرير'],
                  ['الشحن بالتلامس (Conduction)', 'انتقال الشحنة بالملامسة المباشرة', 'مس جسم مشحون بجسم متعادل'],
                  ['الشحن بالحث (Induction)', 'إعادة توزيع الشحنات دون تلامس', 'تقريب جسم مشحون من موصل']
                ]},
                { title: 'الموصلات والعوازل', type: 'bullets', content: [
                  'الموصلات (Conductors): تسمح بحرية حركة الشحنات (المعادن - النحاس - الفضة)',
                  'العوازل (Insulators): تمنع حركة الشحنات (المطاط - الزجاج - البلاستيك)',
                  'أشباه الموصلات (Semiconductors): بين الموصل والعازل (السيليكون - الجرمانيوم)'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: الشحن والقوة الكهروستاتيكي - قوانين كولوم ونيوتن',
            icon: '⚖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-1.5-1.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-1.5-1.6-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قانون كولوم هو القانون الأساسي الذي يحكم القوة بين الشحنات الكهربية الساكنة. يشبه في صياغته قانون نيوتن للجذب العام، لكنه يتعامل مع الشحنات بدلاً من الكتل.',
              sections: [
                { title: '📋 نص قانون كولوم', type: 'bullets', content: [
                  'القوة الكهروستاتيكية بين شحنتين نقطيتين تتناسب طردياً مع حاصل ضرب الشحنتين',
                  'وتتناسب عكسياً مع مربع المسافة بينهما',
                  'وتؤثر القوة على خط الواصل بين الشحنتين'
                ]},
                { title: 'صيغة قانون كولوم', type: 'formula', content: 'F = k · |q₁·q₂| / r²' },
                { title: 'ثابت كولوم', type: 'formula', content: 'k = 1/(4\u03c0\u03b5\u2080) = 8.99 \u00d7 10\u2079 N\u00b7m\u00b2/C\u00b2' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: المجالات الكهربية وقانون جاوس',
        icon: '🌐',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة المجال الكهربي، التدفق الكهربي، قانون جاوس وتطبيقاته في حساب المجالات',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: المجال الكهربي - المجال عن شحنة نقطية',
            icon: '🌐',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.1-2.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.1-2.4-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المجال الكهربي هو المنطقة المحيطة بالشحنة التي تؤثر فيها بقوة على الشحنات الأخرى.',
              sections: [
                { title: 'التعريف الرياضي للمجال', type: 'formula', content: 'E⃗ = F⃗ / q₀' },
                { title: 'المجال عن شحنة نقطية', type: 'formula', content: 'E = k·|Q| / r²' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: التوزيعات العامة للشحنة - القوة الناتجة عن المجال',
            icon: '📊',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.5-2.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.5-2.6-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'في الواقع، الشحنات نادراً ما تكون نقطية. غالباً ما تكون موزعة على أسلاك أو أسطح أو أحجام.',
              sections: [
                { title: '📋 أنواع كثافة الشحنة', type: 'table', headers: ['النوع', 'الرمز', 'الصيغة', 'الوحدة'], rows: [
                  ['كثافة خطية (Linear)', 'λ', 'λ = Q/L', 'C/m'],
                  ['كثافة سطحية (Surface)', 'σ', 'σ = Q/A', 'C/m²'],
                  ['كثافة حجمية (Volume)', 'ρ', 'ρ = Q/V', 'C/m³']
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'الجزء الثالث: التدفق الكهربي - قانون جاوس - حالات جاوس الخاصة',
            icon: '🔬',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.7-2.9/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-2.7-2.9-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قانون جاوس يعطينا طريقة أنيقة لحساب المجال الكهربي عندما يكون التوزيع متماثلاً.',
              sections: [
                { title: 'قانون جاوس', type: 'formula', content: '∮E⃗ · dA⃗ = Q_enc / ε₀' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: الطاقة الكهربية',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-600',
        description: 'دراسة طاقة الوضع الكهربية، الجهد الكهربي، أسطح تساوي الجهد، وتطبيقاتها',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: طاقة الوضع الكهربية - تعريف الجهد الكهربي',
            icon: '🔋',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.1-3.2/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.1-3.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الجهد الكهربي هو طاقة الوضع الكهربية لكل وحدة شحنة - وهو مفهوم أساسي في الدوائر الكهربية.',
              sections: [
                { title: 'طاقة الوضع لشحنتين نقطيتين', type: 'formula', content: 'U = k·q₁·q₂ / r' },
                { title: 'الجهد عن شحنة نقطية', type: 'formula', content: 'V = k·Q / r' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: أسطح وخطوط تساوي الجهد - الجهد للتوزيعات العامة',
            icon: '📈',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.3-3.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.3-3.4-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'أسطح تساوي الجهد هي الأسطح التي يكون عندها الجهد ثابتاً.',
              sections: [
                { title: 'العلاقة بين المجال والجهد', type: 'formula', content: 'E = -dV/dr' }
              ]
            }
          },
          {
            id: 3,
            title: 'الجزء الثالث: الجهد من المجال - طاقة الوضع لنظام مختلف الشحنات',
            icon: '🎯',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.5-3.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-phy-T1-3.5-3.6-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمكن حساب الجهد من المجال الكهربي بالتكامل، والعكس صحيح.',
              sections: [
                { title: 'حساب الجهد من المجال', type: 'formula', content: 'V_B - V_A = -∫ E⃗ · dl⃗' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-12-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: The Birth of Quantum Theory',
        icon: '💡',
        color: 'from-violet-500 to-purple-600',
        description: 'How impossible anomalies shattered classical wave theory and revealed the particle nature of light',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Particle Model of Wave',
            icon: '🔥',
            duration: '45 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/Particle-model-ofWave/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/Particle-model-ofWave-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'By 1900, classical electromagnetic wave theory predicted that a hot object would radiate an infinite amount of high-frequency energy.',
              sections: [
                { title: 'Classical Prediction', type: 'text', content: 'Electromagnetic wave theory predicted that energy would become infinite at high frequencies - which is physically impossible.' }
              ]
            }
          },
          {
            id: 2,
            title: "Lesson 2: Matter Waves",
            icon: '⚛️',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'To solve this anomaly, Max Planck proposed a radical solution: vibrating atoms cannot emit energy continuously.',
              sections: [
                { title: 'The Fundamental Equation', type: 'formula', content: 'E = nhf' }
              ]
            }
          },
          {
            id: 3,
            title: "Lesson 3: Bohr's Model of the Atom",
            icon: '💡',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L3/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L3-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Shining light on a metal plate should theoretically heat it up and slowly eject electrons. Instead, experiments showed a selective behavior.',
              sections: [
                { title: 'The Experiment', type: 'text', content: 'High-frequency light (ultraviolet): Electrons eject instantly - current flows.' }
              ]
            }
          },
          {
            id: 4,
            title: "Lesson 4: The Quantum Model of the Atom",
            icon: '🔆',
            duration: '65 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L4/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U1L4-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: "In 1905, Albert Einstein proposed that light itself travels in discrete, massless bundles called photons.",
              sections: [
                { title: 'Key Concepts', type: 'bullets', content: ['One-to-one interaction: One photon interacts with exactly one electron', 'Energy E = hf is transferred all at once, instantly'] }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Nuclear and particle Physics',
        icon: '☢️',
        color: 'from-rose-500 to-red-600',
        description: 'Radioactivity, fission, and nuclear fusion',
        lessons: [
          { id: 1, title: 'Lesson 1: The Nucleus', icon: '☢️', duration: '50 minutes', lessonUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U2L1/', lessonTitle: '📖 Lesson Explanation', examUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U2L1-exam/', examTitle: '📝 Take the Quiz' },
          { id: 2, title: 'Lesson 2: Nuclear Decay and Reactions', icon: '💥', duration: '65 minutes', lessonUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U2L2/', lessonTitle: '📖 Lesson Explanation', examUrl: 'https://hesham-afandi.github.io/12adv-ins-ph-T3-U2L2-exam/', examTitle: '📝 Take the Quiz' }
        ]
      }
    ]
  },
  'physics-12-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: التيار الكهربي',
        icon: '⚙️',
        color: 'from-blue-500 to-cyan-600',
        description: 'في هذه الوحدة، نستكشف الأسس الأساسية للتيار الكهربائي - القوة الخفية التي تشغل عالمنا الحديث.',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: التيار الكهربي وكثافة التيار',
            icon: '🏃',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.1-5.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.1-5.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'القوة الخفية التي تشغل عالمنا الحديث',
              sections: [
                { title: 'المفاهيم الأساسية', type: 'bullets', content: [
                  'التيار الكهربائي: i = dq/dt (معدل تغير الشحنة مع الزمن)',
                  'كثافة التيار: J = i/A (التيار لكل وحدة مساحة)',
                  'سرعة الانجراف: v_d (سرعة الإلكترونات الحرة)'
                ]},
                { title: 'معادلات التيار والمقاومة', type: 'formula', content: 'R = ρL/A ; V = IR' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: المقاومات-قانون أوم',
            icon: '⚖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.3-5.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.3-5.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نستكشف العلاقة الأساسية بين الجهد الكهربي والتيار والمقاومة.',
              sections: [
                { title: 'قانون أوم', type: 'formula', content: 'V = I × R' },
                { title: 'قانون المقاومة النوعية', type: 'formula', content: 'R = ρ × (L/A)' }
              ]
            }
          },
          {
            id: 3,
            title: 'الجزء الثالث: التوالي والتوازي',
            icon: '🔗',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.5-5.6/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.5-5.6-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نتعلم كيف نجمع المقاومات في دوائر كهربية بطرق مختلفة.',
              sections: [
                { title: 'المقاومة المكافئة (توالي)', type: 'formula', content: 'R_total = R₁ + R₂ + R₃ + ...' },
                { title: 'المقاومة المكافئة (توازي)', type: 'formula', content: '1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...' }
              ]
            }
          },
          {
            id: 4,
            title: 'الجزء الرابع: الطاقة والقدرة الكهربية',
            icon: '⚡',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.7-5.8/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-5.7-5.8-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'القدرة الكهربية هي معدل تحويل الطاقة الكهربية إلى أشكال أخرى من الطاقة.',
              sections: [
                { title: 'القدرة الكهربية', type: 'formula', content: 'P = V × I = I²R = V²/R' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: دوائر التيار المستمر',
        icon: '🔋',
        color: 'from-orange-500 to-red-600',
        description: 'دراسة الدوائر الكهربية المعقدة وتطبيق قوانين كيرشوف لحلها.',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: التيار المستمر ومصادره',
            icon: '🔌',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-6.1-6.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-6.1-6.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التيار المستمر هو تدفق الشحنات الكهربية في اتجاه واحد فقط.',
              sections: [
                { title: 'التيار المستمر (DC)', type: 'text', content: 'التيار المستمر هو تيار كهربي يتدفق في اتجاه واحد ثابت لا يتغير مع الزمن.' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: قوانين كيرشوف',
            icon: '🔀',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-6.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-6.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قوانين كيرشوف هما أداتان أساسيتان لتحليل الدوائر الكهربية المعقدة.',
              sections: [
                { title: 'قانون كيرشوف الأول (التيار)', type: 'formula', content: 'ΣI_in = ΣI_out' },
                { title: 'قانون كيرشوف الثاني (الجهد)', type: 'formula', content: 'Σε = ΣIR' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: الكهرباء والمغناطيسية',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-600',
        description: 'دراسة الشحنات الكهربائية والتيار والمجالات المغناطيسية.',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: الشحنة الكهربائية وقانون كولوم',
            icon: '🔋',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-7.1-7.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-7.1-7.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الشحنة الكهربائية خاصية أساسية للمادة. الشحنات المتشابهة تتنافر، والمختلفة تتجاذب.',
              sections: [
                { title: 'قانون كولوم', type: 'formula', content: 'F = k · |q₁q₂| / r²' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: المجال الكهربائي',
            icon: '🌐',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-7.5-7.7/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-7.5-7.7-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المجال الكهربائي هو المنطقة المحيطة بالشحنة الكهربائية التي تؤثر فيها بقوة على الشحنات الأخرى.',
              sections: [
                { title: 'تعريف المجال الكهربائي', type: 'formula', content: 'E = F/q = kQ/r²' }
              ]
            }
          }
        ]
      },
      {
        id: 4,
        name: 'الوحدة الرابعة: المجالات المغناطيسية للتيار المستمر',
        icon: '🧲',
        color: 'from-yellow-500 to-orange-600',
        description: 'دراسة المجالات المغناطيسية الناتجة عن التيارات الكهربائية.',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: قانون بيوت-سافارت وقانون أمبير',
            icon: '🧲',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-8.1-8.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-8.1-8.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التيار الكهربائي المار في سلك يولد مجالاً مغناطيسياً حوله.',
              sections: [
                { title: 'المجال المغناطيسي لسلك مستقيم طويل', type: 'formula', content: 'B = μ₀I / (2πr)' },
                { title: 'قانون أمبير', type: 'formula', content: '∮B·dl = μ₀I_enclosed' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: المواد المغناطيسية والتوصيل الفائق',
            icon: '🔬',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-8.4-end/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-Br-Ar-phy-T3-8.4-end-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تتميز المواد بخواص مغناطيسية مختلفة عند التعرض لمجال مغناطيسي خارجي.',
              sections: [
                { title: 'التوصيل الفائق', type: 'text', content: 'الموصلات الفائقة مقاومتها صفر عند درجات حرارة منخفضة جداً.' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-12-general-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: الكهرباء والتيار',
        icon: '⚡',
        color: 'from-blue-500 to-cyan-600',
        description: 'استكشاف أساسيات الدوائر الكهربية، قوانين التيار والجهد، وتطبيقاتها العملية.',
        lessons: [
          {
            id: 1,
            title: 'الدرس الأول: الدائرة الكهربية البسيطة',
            icon: '🔌',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تعتبر الدائرة الكهربية البسيطة حجر الأساس في فهم الكهرباء.',
              sections: [
                { title: 'شدة التيار الكهربي', type: 'formula', content: 'I = Q / t' },
                { title: 'قانون أوم', type: 'formula', content: 'V = I × R' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس الثاني: تطبيقات الدائرة الكهربية',
            icon: '💡',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'كيف نتعامل مع دوائر تحتوي على أكثر من مقاومة؟',
              sections: [
                { title: 'المقاومة المكافئة (توالي)', type: 'formula', content: 'R_eq = R₁ + R₂ + ...' },
                { title: 'المقاومة المكافئة (توازي)', type: 'formula', content: '1/R_eq = 1/R₁ + 1/R₂ + ...' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: المغناطيسية',
        icon: '🧲',
        color: 'from-red-500 to-orange-600',
        description: 'دراسة المجال المغناطيسي الناتج عن التيار الكهربائي، القوى المغناطيسية، وتطبيقاتها.',
        lessons: [
          {
            id: 3,
            title: 'الدرس الثالث: فهم المغناطيسية',
            icon: '🧲',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12gen-phy-T3-3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المغناطيسية والكهرباء وجهان لعملة واحدة.',
              sections: [
                { title: 'المجال المغناطيسي لسلك طويل', type: 'formula', content: 'B = (μ₀ × I) / (2π × r)' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس الرابع: تطبيقات المجال المغناطيسي',
            icon: '⚙️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12jen-phy-T3-D4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نكتشف القوى المغناطيسية وتطبيقاتها العملية في المحركات الكهربية.',
              sections: [
                { title: 'القوة على شحنة متحركة', type: 'formula', content: 'F = q × v × B × sin(θ)' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-12-advanced-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: محتوى عام للمتقدم',
        icon: '📘',
        color: 'from-indigo-500 to-blue-600',
        lessons: [
          {
            id: 1,
            title: 'الدرس الأول',
            icon: '📖',
            duration: '45 دقيقة',
            lessonUrl: '#',
            lessonTitle: '📖 شرح الدرس',
            examUrl: '#',
            examTitle: '📝 ابدأ الاختبار'
          }
        ]
      }
    ]
  }
};
