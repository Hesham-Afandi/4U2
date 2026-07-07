import { Curriculum } from '../../types';

export const phy12General1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: الكهرباء الساكنة',
      icon: '⚡',
      color: 'from-yellow-400 to-red-500',
      description: 'دراسة الشحنة الكهربية وخصائصها، طرق الشحن الكهربي، وقانون كولوم لحساب القوة الكهروستاتيكية بين الشحنات.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الشحنة الكهربية',
          icon: '🔋',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الشحنة الكهربية هي خاصية أساسية للمادة، تنشأ من زيادة أو نقص الإلكترونات في الذرة. الشحنات نوعان: موجبة وسالبة، وتتفاعل فيما وفق قوانين محددة.',
            sections: [
              { title: 'وحدة الشحنة الكهربية', type: 'formula', content: 'الكولوم (C) هي الوحدة الدولية لقياس الشحنة الكهربية' },
              { title: 'شحنة الإلكترون والبروتون', type: 'formula', content: 'e = 1.6 × 10⁻¹⁹ C' },
              { title: 'شحنة الإلكترون', type: 'bullets', content: [
                'الإلكترون: شحنة سالبة = -e',
                'البروتون: شحنة موجبة = +e',
                'النيوترون: متعادل الشحنة = 0'
              ]},
              { title: 'قانون كم الشحنة (التكميم)', type: 'formula', content: 'q = n·e (حيث n عدد صحيح موجب أو سالب)' },
              { title: 'مبدأ الانحفاظ', type: 'text', content: 'الشحنة الكهربية لا تُخلق ولا تفنى، ولكن تنتقل من جسم إلى آخر' },
              { title: 'طرق الشحن الكهربي', type: 'bullets', content: [
                'الشحن بالدلك (Friction): انتقال الإلكترونات بين جسمين مختلفين',
                'الشحن بالتماس (Conduction): لمس جسم مشحون بجسم متعادل',
                'الشحن بالحث (Induction): تقريب جسم مشحون دون لمس'
              ]},
              { title: 'أنواع المواد حسب توصيلها', type: 'bullets', content: [
                'الموصلات (Conductors): تسمح بحركة الإلكترونات (الفلزات)',
                'العوازل (Insulators): تمنع حركة الإلكترونات (البلاستيك، الزجاج)',
                'أشباه الموصلات (Semiconductors): توصيلها متوسط (السيليكون، الجرمانيوم)'
              ]},
              { title: 'الكشاف الكهربي', type: 'text', content: 'جهاز يستخدم للكشف عن وجود شحنة كهربية، وتحديد نوعها بالحث' }
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: القوة الكهروستاتيكية',
          icon: '↔️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القوة الكهروستاتيكية هي قوة التجاذب أو التنافر بين الشحنات الساكنة. تُحسب وفق قانون كولوم الذي وضعه العالم الفرنسي شارل كولوم عام 1785.',
            sections: [
              { title: 'قانون كولوم', type: 'formula', content: 'F = k·|q₁·q₂| / r²' },
              { title: 'متغيرات قانون كولوم', type: 'bullets', content: [
                'F: القوة الكهروستاتيكية (نيوتن, N)',
                'q₁, q₂: مقدار الشحنتين (كولوم, C)',
                'r: المسافة بين الشحنتين (متر, m)',
                'k: ثابت كولوم'
              ]},
              { title: 'ثابت كولوم', type: 'formula', content: 'k = 8.99 × 10⁹ N·m²/C²' },
              { title: 'الصيغة البديلة', type: 'formula', content: 'k = 1/(4πε₀) حيث ε₀ سماحية الفراغ' },
              { title: 'سماحية الفراغ', type: 'formula', content: 'ε₀ = 8.85 × 10⁻¹² C²/(N·m²)' },
              { title: 'اتجاه القوة', type: 'bullets', content: [
                'الشحنتان متشابهتان (±±): قوة تنافر',
                'الشحنتان مختلفتان (±∓): قوة تجاذب',
                'القوة متبادلة: F₁₂ = -F₂₁ (وفق قانون نيوتن الثالث)'
              ]},
              { title: 'العلاقات التناسبية', type: 'bullets', content: [
                'F تتناسب طردياً مع حاصل ضرب الشحنتين: F ∝ q₁q₂',
                'F تتناسب عكسياً مع مربع المسافة: F ∝ 1/r²',
                'إذا زادت المسافة إلى الضعف، القوة تقل إلى الربع',
                'إذا زادت إحدى الشحنتين إلى الضعف، القوة تتضاعف'
              ]},
              { title: 'مبدأ التراكب (Superposition)', type: 'formula', content: 'F_total = F₁ + F₂ + F₃ + ... (جمع اتجاهي)' },
              { title: 'خطوات حل مسائل التراكب', type: 'bullets', content: [
                '1. احسب القوة الناتجة عن كل شحنة على حدة',
                '2. حدد اتجاه كل قوة (تجاذب أو تنافر)',
                '3. حلل القوى إلى مركباتها (x و y)',
                '4. اجمع المركبات المتشابهة',
                '5. احسب المحصلة باستخدام قانون فيثاغورس: F = √(Fx² + Fy²)'
              ]},
              { title: 'زاوية المحصلة', type: 'formula', content: 'tan(θ) = Fy / Fx' }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: المجالات الكهربية',
      icon: '🧲',
      color: 'from-blue-500 to-cyan-600',
      description: 'دراسة المجال الكهربي الناتج عن الشحنات، طرق قياسه، وخطوط المجال الكهربي مع تطبيقاته العملية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: قياس المجالات الكهربية',
          icon: '📏',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المجال الكهربي هو المنطقة المحيطة بالشحنة الكهربية والتي تؤثر فيها بقوة على أي شحنة أخرى توضع فيها. يُقاس المجال بوحدة نيوتن لكل كولوم (N/C) أو فولت لكل متر (V/m).',
            sections: [
              { title: 'تعريف شدة المجال الكهربي', type: 'formula', content: 'E = F / q (حيث q شحنة اختبار موجبة وصغيرة)' },
              { title: 'شدة المجال الناتج عن شحنة نقطية', type: 'formula', content: 'E = k·q / r²' },
              { title: 'اتجاه المجال الكهربي', type: 'bullets', content: [
                'شحنة موجبة: خطوط المجال تخرج منها (باتجاه الخارج)',
                'شحنة سالبة: خطوط المجال تدخل إليها (باتجاه الداخل)',
                'اتجاه المجال = اتجاه القوة المؤثرة على شحنة اختبار موجبة'
              ]},
              { title: 'مبدأ التراكب للمجال', type: 'formula', content: 'E_total = E₁ + E₂ + E₃ + ... (جمع اتجاهي)' },
              { title: 'خطوط المجال الكهربي', type: 'bullets', content: [
                'خطوط وهمية تُرسم لتوضيح المجال الكهربي',
                'تبدأ من الشحنات الموجبة وتنتهي عند الشحنات السالبة',
                'اتجاه الخط عند أي نقطة = اتجاه المجال عندها',
                'كثافة الخطوط تدل على شدة المجال'
              ]},
              { title: 'خصائص خطوط المجال', type: 'bullets', content: [
                'لا تتقاطع أبداً (لأن للمجال اتجاهاً واحداً عند كل نقطة)',
                'تتناسب كثافتها مع شدة المجال',
                'تكون عمودية على سطح الموصل المشحون',
                'لا تخرج ولا تدخل في الموصل في حالة الاتزان الكهروستاتيكي'
              ]},
              { title: 'المجال الكهربي المنتظم', type: 'bullets', content: [
                'ينشأ بين لوحين متوازيين مشحونين بشحنتين متساويتين ومتضادتين',
                'E = V / d (V فرق الجهد، d المسافة بين اللوحين)',
                'خطوط المجال متوازية والمسافات بينها متساوية',
                'شدة المجال ثابتة في جميع النقاط'
              ]},
              { title: 'قانون جاوس', type: 'formula', content: 'Φ_E = ∮ E·dA = Q_enclosed / ε₀' },
              { title: 'التطبيقات', type: 'bullets', content: [
                'حساب المجال لسلك مشحون لانهائي',
                'حساب المجال للوح مشحون لانهائي',
                'حساب المجال لكرة موصلة مشحونة'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: تطبيقات المجالات الكهربية',
          icon: '🔬',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-phy-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'للمجالات الكهربية تطبيقات عملية واسعة في حياتنا اليومية والصناعة، من المكثفات الكهربية إلى الطلاء الكهربي والبرق الجوي.',
            sections: [
              { title: 'المكثف الكهربي', type: 'text', content: 'جهاز يخزن الشحنة والطاقة الكهربية، يتكون من لوحين موصلين بينهما مادة عازلة' },
              { title: 'سعة المكثف', type: 'formula', content: 'C = Q / V (كولوم لكل فولت = فاراد, F)' },
              { title: 'سعة مكثف الألواح المتوازية', type: 'formula', content: 'C = ε₀·A / d' },
              { title: 'العوامل المؤثرة على السعة', type: 'bullets', content: [
                'مساحة اللوحين (A): تتناسب طردياً مع السعة',
                'المسافة بين اللوحين (d): تتناسب عكسياً مع السعة',
                'المادة العازلة: تزيد السعة بمعامل ثابت العزل κ',
                'C = κ·ε₀·A / d'
              ]},
              { title: 'طاقة المكثف', type: 'formula', content: 'U = ½·C·V² = ½·Q²/C = ½·Q·V' },
              { title: 'تطبيقات المكثفات', type: 'bullets', content: [
                'تخزين الطاقة في الدوائر الإلكترونية',
                'تنعيم التيار في مقومات التيار',
                'كاميرات الفلاش (تفريغ سريع للطاقة)',
                'أجهزة تنظيم ضربات القلب'
              ]},
              { title: 'قوة البرق', type: 'bullets', content: [
                'فرق جهد كبير بين السحب والأرض (قد يصل إلى 10⁸ فولت)',
                'المجال الكهربي يتجاوز قوة العزل للهواء (3 × 10⁶ V/m)',
                'يحدث التفريغ الكهربي بصورة فجائية (برق)',
                'قضبان البرق (مانعات الصواعق): تحمي المباني من التفريغ'
              ]},
              { title: 'الطلاء الكهربي (Electrostatic Painting)', type: 'bullets', content: [
                'جسيمات الطلاء تُشحّن بشحنة (عادة سالبة)',
                'الجسم المراد طلاؤه يُشحّن بشحنة مخالفة (موجبة)',
                'جسيمات الطلاء تنجذب بقوة نحو الجسم',
                'يقلل الهدر ويوفر طلاءً متساوياً'
              ]},
              { title: 'المرسبات الكهربية (Electrostatic Precipitators)', type: 'bullets', content: [
                'تستخدم في مداخن المصانع لتنقية الغازات',
                'جسيمات الدخان تُشحّن وتنجذب إلى الألواح',
                'تزيل أكثر من 99% من الملوثات',
                'تحمي البيئة من التلوث'
              ]},
              { title: 'تطبيقات أخرى', type: 'bullets', content: [
                'طابعات الليزر: تستخدم الشحنات الساكنة لنقل الحبر',
                'ماكينات تصوير المستندات: تعمل بنفس المبدأ',
                'أنابيب الأشعة المهبطية: تسريع الإلكترونات بمجالات كهربية',
                'المسرعات الكهربية: تسريع الجسيمات المشحونة في أبحاث الفيزياء'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const phy12Inspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Unit 1: Fundamentals of Light',
      icon: '💡',
      color: 'from-yellow-400 to-orange-500',
      description: 'Study of the fundamental properties of light, illumination concepts, and the wave nature of light including interference and diffraction.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1: Illumination',
          icon: '💡',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Illumination is the amount of light falling on a given surface area. It depends on the luminous intensity of the source and the distance from the source.',
            sections: [
              { title: 'Luminous Flux', type: 'text', content: 'Total amount of light emitted by a source, measured in lumens (lm)' },
              { title: 'Luminous Intensity', type: 'formula', content: 'I = Φ / Ω (measured in candelas, cd)' },
              { title: 'Illuminance', type: 'formula', content: 'E = I / d² (for perpendicular surface, measured in lux, lx)' },
              { title: 'Inverse Square Law', type: 'bullets', content: [
                'Illuminance is inversely proportional to the square of the distance',
                'Doubling the distance reduces illumination to one-fourth',
                'Applies to point sources of light'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2: Wave Nature of Light',
          icon: '🌊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-1.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Light behaves as an electromagnetic wave. This wave nature explains phenomena like interference, diffraction, and polarization which cannot be explained by the particle model alone.',
            sections: [
              { title: 'Wave Equation', type: 'formula', content: 'c = λf (c = 3 × 10⁸ m/s)' },
              { title: 'Interference', type: 'bullets', content: [
                'Constructive: waves add up (bright fringes)',
                'Destructive: waves cancel out (dark fringes)',
                'Demonstrated by Young\'s Double Slit Experiment'
              ]},
              { title: 'Diffraction', type: 'text', content: 'The bending and spreading of light waves around obstacles or through narrow slits' },
              { title: 'Polarization', type: 'bullets', content: [
                'Restriction of light vibrations to a single plane',
                'Proves that light is a transverse wave',
                'Used in polarized sunglasses and 3D movies'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Reflection and Refraction',
      icon: '🪞',
      color: 'from-cyan-500 to-blue-600',
      description: 'Study of how light interacts with surfaces and different media, including laws of reflection, curved mirrors, refraction, and lenses.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1: Reflection of Light',
          icon: '🪞',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Reflection occurs when light bounces off a surface. The behavior of reflected light is governed by the laws of reflection.',
            sections: [
              { title: 'Law of Reflection', type: 'formula', content: 'θ\u1d62 = θ\u1d63 (Angle of incidence = Angle of reflection)' },
              { title: 'Specular vs Diffuse', type: 'bullets', content: [
                'Specular: smooth surface, parallel rays remain parallel',
                'Diffuse: rough surface, rays scatter in all directions',
                'Both obey the law of reflection at the microscopic level'
              ]},
              { title: 'Plane Mirrors', type: 'bullets', content: [
                'Image is virtual, upright, and same size as object',
                'Image distance equals object distance (d\u1d62 = d\u22ef)',
                'Lateral inversion (left appears right)'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2: Curved Mirrors',
          icon: '🥄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Curved mirrors are sections of a sphere. Concave mirrors converge light, while convex mirrors diverge light, creating various types of images.',
            sections: [
              { title: 'Mirror Equation', type: 'formula', content: '1/f = 1/d\u22ef + 1/d\u1d62' },
              { title: 'Magnification', type: 'formula', content: 'm = -d\u1d62/d\u22ef = h\u1d62/h\u22ef' },
              { title: 'Concave Mirror', type: 'bullets', content: [
                'Converging mirror, focal point is in front',
                'Can form real or virtual images depending on object position',
                'Used in telescopes, shaving mirrors, and headlights'
              ]},
              { title: 'Convex Mirror', type: 'bullets', content: [
                'Diverging mirror, focal point is behind',
                'Always forms virtual, upright, and diminished images',
                'Used in car side mirrors and security mirrors'
              ]},
              { title: 'Sign Convention', type: 'bullets', content: [
                'f is + for concave and - for convex',
                'd\u1d62 is + for real images and - for virtual images',
                'm is + for upright and - for inverted images'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 3: Refraction of Light',
          icon: '🌊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Refraction is the bending of light as it passes from one medium to another due to a change in its speed.',
            sections: [
              { title: 'Index of Refraction', type: 'formula', content: 'n = c / v' },
              { title: "Snell's Law", type: 'formula', content: 'n\u2081sin(\u03b8\u2081) = n\u2082sin(\u03b8\u2082)' },
              { title: 'Total Internal Reflection', type: 'bullets', content: [
                'Occurs when light travels from denser to less dense medium',
                'Angle of incidence must exceed the critical angle',
                'Critical angle: sin(\u03b8_c) = n\u2082 / n\u2081 (where n\u2081 > n\u2082)'
              ]},
              { title: 'Applications', type: 'bullets', content: [
                'Fiber optics for communication',
                'Mirages in deserts',
                'Apparent depth vs real depth in water'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 4: Convex and Concave Lenses',
          icon: '👓',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/12Adv-Ins-phy-T1-2.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Lenses refract light to form images. Convex lenses converge light rays, while concave lenses diverge them.',
            sections: [
              { title: 'Thin Lens Equation', type: 'formula', content: '1/f = 1/d\u22ef + 1/d\u1d62' },
              { title: 'Magnification', type: 'formula', content: 'm = -d\u1d62/d\u22ef = h\u1d62/h\u22ef' },
              { title: 'Convex Lens (Converging)', type: 'bullets', content: [
                'Thicker at the center than at the edges',
                'Positive focal length (+f)',
                'Can form real or virtual images depending on object distance'
              ]},
              { title: 'Concave Lens (Diverging)', type: 'bullets', content: [
                'Thinner at the center than at the edges',
                'Negative focal length (-f)',
                'Always forms virtual, upright, and diminished images'
              ]},
              { title: "Lens Maker's Equation", type: 'formula', content: '1/f = (n-1)(1/R\u2081 - 1/R\u2082)' }
            ]
          }
        }
      ]
    }
  ]
};

export const math11AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: دوال القوة والنسبية وكثيرة الحدود',
      icon: '🔢',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة دوال القوة والدوال الجذرية، كثيرات الحدود، الدوال النسبية، المتباينات غير الخطية، ونظريتا الباقي والعامل.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: دوال القوة والدوال الجذرية',
          icon: 'xⁿ',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'دوال القوة هي دوال على الصورة f(x) = xⁿ. الدوال الجذرية هي دوال تحتوي على جذر، وهي الحالة الخاصة عندما n كسر.',
            sections: [
              { title: 'دالة القوة', type: 'formula', content: 'f(x) = xⁿ' },
              { title: 'خصائص دوال القوة', type: 'bullets', content: [
                'n صحيح موجب زوجي: المنحنى على شكل U، المجال جميع الأعداد الحقيقية، المدى y ≥ 0',
                'n صحيح موجب فردي: المنحنى على شكل S، المجال والمدى جميع الأعداد الحقيقية',
                'n سالب: تقارب عند المحاور، x ≠ 0'
              ]},
              { title: 'الدوال الجذرية', type: 'formula', content: 'f(x) = ⁿ√x = x^(1/n)' },
              { title: 'أمثلة على الدوال الجذرية', type: 'bullets', content: [
                'f(x) = √x = x^(1/2): المجال x ≥ 0',
                'f(x) = ∛x = x^(1/3): المجال جميع الأعداد الحقيقية',
                'f(x) = ⁴√x = x^(1/4): المجال x ≥ 0'
              ]},
              { title: 'تحويلات دوال القوة', type: 'formula', content: 'g(x) = a·(x - h)ⁿ + k' },
              { title: 'قواعد التحويل', type: 'bullets', content: [
                'h: إزاحة أفقية (يمين/يسار)',
                'k: إزاحة رأسية (أعلى/أسفل)',
                'a: تمدد/انكماش رأسي وانعكاس'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدوال كثيرة الحدود',
          icon: '∑',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'كثيرات الحدود هي تعبيرات جبرية مكونة من حدود على الصورة axⁿ حيث n عدد صحيح غير سالب. درجة كثير الحدود تحدد سلوكه العام.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀' },
              { title: 'المصطلحات الأساسية', type: 'bullets', content: [
                'الدرجة (Degree): أكبر أس لـ x (n)',
                'المعامل الرئيسي (Leading Coefficient): aₙ',
                'الحد الثابت (Constant Term): a₀'
              ]},
              { title: 'السلوك النهائي (End Behavior)', type: 'bullets', content: [
                'درجة زوجية، معامل رئيسي موجب: x→±∞ ⇒ P(x)→+∞',
                'درجة زوجية، معامل رئيسي سالب: x→±∞ ⇒ P(x)→-∞',
                'درجة فردية، معامل رئيسي موجب: x→-∞ ⇒ P(x)→-∞، x→+∞ ⇒ P(x)→+∞',
                'درجة فردية، معامل رئيسي سالب: x→-∞ ⇒ P(x)→+∞، x→+∞ ⇒ P(x)→-∞'
              ]},
              { title: 'عدد الأصفار والتقاطعات', type: 'bullets', content: [
                'كثير حدود من الدرجة n له على الأكثر n صفر حقيقي',
                'عدد تقاطعات x على الأكثر n',
                'عدد النقاط الحرجة على الأكثر n-1',
                'عدد نقاط الانعطاف على الأكثر n-2'
              ]},
              { title: 'الانضغاط (Multiplicities)', type: 'bullets', content: [
                'تعدد فردي: المنحنى يعبر محور x',
                'تعدد زوجي: المنحنى يلامس محور x ويرتد',
                'كلما زاد التعدد، أصبح المنحنى أكثر تسطحاً عند الصفر'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: نظريتا الباقي والعامل',
          icon: '📏',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نظريتا الباقي والعامل هما أداتان قويتان تربطان بين قسمة كثيرات الحدود وأصفارها، وتساعداننا على تحليل الدوال وإيجاد جذورها.',
            sections: [
              { title: 'نظرية الباقي', type: 'formula', content: 'إذا قُسم P(x) على (x - a)، فإن الباقي = P(a)' },
              { title: 'تطبيقات نظرية الباقي', type: 'bullets', content: [
                'إيجاد قيمة كثير الحدود عند نقطة معينة بسرعة',
                'التحقق من صحة القسمة التركيبية',
                'P(a) = الباقي عند القسمة على (x - a)'
              ]},
              { title: 'نظرية العامل', type: 'formula', content: '(x - a) عامل لـ P(x) إذا وفقط إذا P(a) = 0' },
              { title: 'تطبيقات نظرية العامل', type: 'bullets', content: [
                'التحقق من أن (x - a) عامل: نعوض P(a) = 0',
                'إيجاد الأصفار: نحل P(a) = 0',
                'تحليل كثيرات الحدود إلى عواملها'
              ]},
              { title: 'القسمة التركيبية', type: 'bullets', content: [
                'طريقة مختصرة لقسمة كثير حدود على (x - c)',
                'أسرع من القسمة الطويلة',
                'تستخدم لإيجاد الباقي والعوامل'
              ]},
              { title: 'نظرية الأصفار النسبية (Rational Zero Theorem)', type: 'formula', content: 'الأصفار النسبية المحتملة = ±(عوامل الحد الثابت) / (عوامل المعامل الرئيسي)' }
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: أصفار الدوال كثيرة الحدود',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'أصفار كثير الحدود (أو جذوره) هي قيم x التي تجعل P(x) = 0. إيجاد الأصفار يساعد في رسم المنحنى وحل المعادلات.',
            sections: [
              { title: 'الأصفار الحقيقية', type: 'bullets', content: [
                'نقاط تقاطع المنحنى مع محور x',
                'حلول المعادلة P(x) = 0',
                'قد تكون نسبية أو غير نسبية'
              ]},
              { title: 'نظرية الأصفار النسبية', type: 'formula', content: 'p/q حيث p عامل للحد الثابت و q عامل للمعامل الرئيسي' },
              { title: 'الخطوات العملية لإيجاد الأصفار', type: 'bullets', content: [
                '1. اكتب جميع الأصفار النسبية المحتملة',
                '2. اختبر كل قيمة باستخدام التعويض أو القسمة التركيبية',
                '3. عند إيجاد صفر، اقسم كثير الحدود على (x - a)',
                '4. كرر العملية مع الناتج حتى تصل إلى تربيعي',
                '5. استخدم القانون العام أو التحليل'
              ]},
              { title: 'القانون العام (للتربيعي)', type: 'formula', content: 'x = [-b ± √(b² - 4ac)] / 2a' },
              { title: 'المميز (Discriminant)', type: 'bullets', content: [
                'Δ = b² - 4ac',
                'Δ > 0: جذران حقيقيان مختلفان',
                'Δ = 0: جذر حقيقي مكرر',
                'Δ < 0: لا جذور حقيقية (جذران مركبان)'
              ]},
              { title: 'نظرية الجذور الأساسية', type: 'text', content: 'كثير حدود من الدرجة n له بالضبط n جذر في مجموعة الأعداد المركبة (مع احتساب التعدد)' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الدوال النسبية',
          icon: '÷',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة النسبية هي خارج قسمة كثيري حدود. لها خصائص مميزة مثل التقاربات الرأسية والأفقية التي نحتاج لدراستها لفهم سلوكها.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = P(x) / Q(x) حيث Q(x) ≠ 0' },
              { title: 'المجال', type: 'bullets', content: [
                'جميع الأعداد الحقيقية ما عدا قيم x التي تجعل Q(x) = 0',
                'هذه القيم تعطينا التقاربات الرأسية (أو الثقوب)'
              ]},
              { title: 'التقارب الرأسي (Vertical Asymptote)', type: 'bullets', content: [
                'x = a تقارب رأسي إذا كانت f(x) → ±∞ عندما x → a',
                'يحدث عندما يكون المقام = 0 والبسط ≠ 0 عند x = a',
                'إذا كان البسط = 0 أيضاً: قد يكون ثقب (انفصال قابل للإزالة)'
              ]},
              { title: 'التقارب الأفقي (Horizontal Asymptote)', type: 'bullets', content: [
                'إذا درجة البسط < درجة المقام: y = 0',
                'إذا درجة البسط = درجة المقام: y = (المعامل الرئيسي للبسط) / (المعامل الرئيسي للمقام)',
                'إذا درجة البسط > درجة المقام: لا يوجد تقارب أفقي'
              ]},
              { title: 'التقارب المائل (Oblique Asymptote)', type: 'bullets', content: [
                'يحدث عندما درجة البسط = درجة المقام + 1',
                'نوجد بقسمة كثيري الحدود (قسمة طويلة)',
                'الناتج (بدون الباقي) هو معادلة التقارب المائل: y = mx + b'
              ]},
              { title: 'الثقوب (Holes)', type: 'bullets', content: [
                'تحدث عندما يكون هناك عامل مشترك بين البسط والمقام',
                'x = a ثقب إذا كان (x - a) عامل مشترك',
                'نبسط الدالة بإلغاء العامل المشترك'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس السادس: المتباينات غير الخطية',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتباينات غير الخطية تتضمن كثيرات حدود أو دوال نسبية. نحلها بإيجاد النقاط الحرجة واختبار الفترات.',
            sections: [
              { title: 'خطوات حل المتباينات', type: 'bullets', content: [
                '1. حوّل المتباينة إلى صورة f(x) > 0 أو f(x) < 0',
                '2. أوجد الأصفار (حيث f(x) = 0)',
                '3. أوجد القيم التي تجعل الدالة غير معرفة (للكسرية)',
                '4. رتب النقاط على خط الأعداد',
                '5. اختبر إشارة f(x) في كل فترة',
                '6. حدد الفترات التي تحقق المتباينة'
              ]},
              { title: 'المتباينات كثيرة الحدود', type: 'bullets', content: [
                'مثال: x² - 5x + 6 > 0',
                'نحل: (x - 2)(x - 3) = 0 ⇒ x = 2, x = 3',
                'نختبر الفترات: (-∞, 2)، (2, 3)، (3, ∞)',
                'الحل: x < 2 أو x > 3'
              ]},
              { title: 'المتباينات النسبية', type: 'bullets', content: [
                'مثال: (x - 1)/(x + 2) ≤ 0',
                'النقاط الحرجة: x = 1 (بسط = 0)، x = -2 (مقام = 0)',
                'نختبر الفترات: (-∞, -2)، (-2, 1]، [1, ∞)',
                'الحل: -2 < x ≤ 1 (نلاحظ: -2 غير مشمولة لأن المقام = 0)'
              ]},
              { title: 'قواعد الإشارات', type: 'bullets', content: [
                '(+)(+) = (+)، (-)(-) = (+)',
                '(+)(-) = (-)، (-)(+) = (-)',
                'متباينة صارمة (< أو >): لا تشمل النقاط الحرجة',
                'متباينة غير صارمة (≤ أو ≥): تشمل النقاط الحرجة (ما عدا حيث المقام = 0)'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: الدوال الأسية واللوغاريتمية',
      icon: '📈',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة الدوال الأسية واللوغاريتمية، خصائص اللوغاريتمات، حل المعادلات الأسية واللوغاريتمية، والانحدار الخطي.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الدوال الأسية',
          icon: 'e\u02e3',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة الأسية هي دالة يكون فيها المتغير في الأس. تنمو أو تتناقص بمعدل يتناسب مع قيمتها الحالية، وتستخدم لنمذجة النمو السكاني، الاضمحلال الإشعاعي، والفائدة المركبة.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = a\u00b7b\u02e3' },
              { title: 'شروط الأساس b', type: 'bullets', content: [
                'b > 0 و b \u2260 1',
                'إذا b > 1: دالة أسية متزايدة (نمو)',
                'إذا 0 < b < 1: دالة أسية متناقصة (اضمحلال)'
              ]},
              { title: 'خصائص الدالة الأسية', type: 'bullets', content: [
                'المجال: جميع الأعداد الحقيقية (-\u221e, \u221e)',
                'المدى: (0, \u221e) فقط (دائماً موجبة)',
                'تقاطع y: (0, a) لأن b\u2070 = 1',
                'لا يوجد تقاطع x (الدالة لا تساوي صفر أبداً)',
                'تقارب أفقي: y = 0'
              ]},
              { title: 'قوانين الأسس', type: 'bullets', content: [
                'b\u1d50 \u00b7 b\u207f = b\u1d50\u207a\u207f',
                'b\u1d50 / b\u207f = b\u1d50\u207b\u207f',
                '(b\u1d50)\u207f = b\u1d50\u207f',
                'b\u2070 = 1',
                'b\u207b\u207f = 1/b\u207f'
              ]},
              { title: 'الدالة الأسية الطبيعية', type: 'formula', content: 'f(x) = a\u00b7e\u02e3 حيث e \u2248 2.718' },
              { title: 'تطبيقات', type: 'bullets', content: [
                'النمو السكاني: P(t) = P\u2080\u00b7e\u02e3\u1d57',
                'الاضمحلال الإشعاعي: A(t) = A\u2080\u00b7e\u207b\u1d4f\u1d57',
                'الفائدة المركبة المستمرة: A = P\u00b7e\u02e3\u1d57'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدوال اللوغاريتمية',
          icon: 'log',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة اللوغاريتمية هي الدالة العكسية للدالة الأسية. اللوغاريتم يجيب على السؤال: "ما الأس الذي يجب رفع الأساس إليه للحصول على هذا العدد؟"',
            sections: [
              { title: 'تعريف اللوغاريتم', type: 'formula', content: 'log_b(x) = y إذا وفقط إذا b\u02e4 = x' },
              { title: 'شروط اللوغاريتم', type: 'bullets', content: [
                'الأساس b > 0 و b \u2260 1',
                'المحتوى x > 0 (لا يوجد لوغاريتم لصفر أو عدد سالب)',
                'log_b(1) = 0 دائماً لأن b\u2070 = 1'
              ]},
              { title: 'أنواع اللوغاريتمات', type: 'bullets', content: [
                'اللوغاريتم المشترك: log(x) = log\u2081\u2080(x)',
                'اللوغاريتم الطبيعي: ln(x) = log_e(x) حيث e \u2248 2.718'
              ]},
              { title: 'خصائص الدالة اللوغاريتمية', type: 'bullets', content: [
                'المجال: (0, \u221e)',
                'المدى: (-\u221e, \u221e)',
                'تقاطع x: (1, 0) لأن log_b(1) = 0',
                'لا يوجد تقاطع y',
                'تقارب رأسي: x = 0'
              ]},
              { title: 'العلاقة مع الدالة الأسية', type: 'bullets', content: [
                'f(x) = b\u02e3 و g(x) = log_b(x) دالتان عكسيتان',
                'f(g(x)) = x و g(f(x)) = x',
                'التمثيلان البيانيان متناظران حول y = x'
              ]},
              { title: 'تحويل بين الصيغ', type: 'formula', content: 'y = log_b(x) \u27fa b\u02e4 = x' }
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: خصائص اللوغاريتمات',
          icon: '🔧',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خصائص اللوغاريتمات تسمح لنا بتبسيط التعبيرات اللوغاريتمية المعقدة، وفك اللوغاريتمات، وحل المعادلات.',
            sections: [
              { title: 'خاصية الضرب (حاصل الضرب)', type: 'formula', content: 'log_b(MN) = log_b(M) + log_b(N)' },
              { title: 'خاصية القسمة (حاصل القسمة)', type: 'formula', content: 'log_b(M/N) = log_b(M) - log_b(N)' },
              { title: 'خاصية القوة', type: 'formula', content: 'log_b(M\u207f) = n\u00b7log_b(M)' },
              { title: 'خصائص أساسية أخرى', type: 'bullets', content: [
                'log_b(1) = 0',
                'log_b(b) = 1',
                'log_b(b\u207f) = n',
                'b^(log_b(x)) = x'
              ]},
              { title: 'تغيير الأساس', type: 'formula', content: 'log_b(x) = log_a(x) / log_a(b)' },
              { title: 'تغيير الأساس للحاسبة', type: 'formula', content: 'log_b(x) = ln(x) / ln(b) = log(x) / log(b)' },
              { title: 'تطبيقات الخصائص', type: 'bullets', content: [
                'فك: log(x\u00b2y\u00b3) = 2log(x) + 3log(y)',
                'دمج: 2log(x) + 3log(y) = log(x\u00b2y\u00b3)',
                'تبسيط: log(100) = log(10\u00b2) = 2'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: المعادلات الأسية واللوغاريتمية',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'لحل المعادلات الأسية واللوغاريتمية، نستخدم الخصائص العكسية بينهما: اللوغاريتم يلغي الأس، والأس يلغي اللوغاريتم.',
            sections: [
              { title: 'حل المعادلات الأسية', type: 'bullets', content: [
                '1. اعزل الحد الأسي',
                '2. خذ اللوغاريتم للطرفين (طبيعي أو مشترك)',
                '3. استخدم خاصية القوة لإنزال الأس',
                '4. حل المعادلة الخطية الناتجة'
              ]},
              { title: 'مثال على معادلة أسية', type: 'formula', content: '3\u02e3 = 24 \u21d2 x\u00b7ln(3) = ln(24) \u21d2 x = ln(24)/ln(3) \u2248 2.89' },
              { title: 'حل المعادلات اللوغاريتمية', type: 'bullets', content: [
                '1. اجمع الحدود اللوغاريتمية في طرف واحد',
                '2. استخدم الخصائص لدمج اللوغاريتمات',
                '3. حول إلى صيغة أسية',
                '4. حل المعادلة الناتجة',
                '5. تحقق من الحلول (لا تقبل الحلول السالبة في اللوغاريتم)'
              ]},
              { title: 'مثال على معادلة لوغاريتمية', type: 'formula', content: 'log\u2082(x) + log\u2082(x - 2) = 3 \u21d2 log\u2082(x(x-2)) = 3 \u21d2 x\u00b2 - 2x = 8 \u21d2 x = 4' },
              { title: 'معادلة الفائدة المركبة', type: 'formula', content: 'A = P(1 + r/n)^(nt)' },
              { title: 'الفائدة المركبة المستمرة', type: 'formula', content: 'A = P\u00b7e\u02e3\u1d57' },
              { title: 'زمن مضاعفة الاستثمار', type: 'formula', content: '2P = P\u00b7e\u02e3\u1d57 \u21d2 t = ln(2)/r \u2248 0.693/r' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الانحدار الخطي',
          icon: '📉',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الانحدار الخطي هو أسلوب إحصائي لإيجاد أفضل خط مستقيم يصف العلاقة بين متغيرين. نستخدمه للتنبؤ وفهم العلاقة بين البيانات.',
            sections: [
              { title: 'معادلة خط الانحدار', type: 'formula', content: '\u0177 = a + bx (أو y = mx + b)' },
              { title: 'ميل خط الانحدار', type: 'formula', content: 'b = r\u00b7(s_y / s_x)' },
              { title: 'نقطة التقاطع مع y', type: 'formula', content: 'a = \u0233 - b\u00b7x\u0304' },
              { title: 'معامل الارتباط (r)', type: 'bullets', content: [
                '-1 \u2264 r \u2264 1',
                'r > 0: ارتباط طردي (موجب)',
                'r < 0: ارتباط عكسي (سالب)',
                'r = 0: لا يوجد ارتباط خطي',
                '|r| قريب من 1: ارتباط قوي',
                '|r| قريب من 0: ارتباط ضعيف'
              ]},
              { title: 'معامل التحديد (r\u00b2)', type: 'bullets', content: [
                'r\u00b2 يمثل نسبة التباين في y التي يفسرها خط الانحدار',
                'r\u00b2 = 0.85 يعني 85% من التغير في y يفسره x',
                '0 \u2264 r\u00b2 \u2264 1'
              ]},
              { title: 'القيم المتطرفة والتأثير', type: 'bullets', content: [
                'القيمة المتطرفة (Outlier): نقطة بعيدة عن النمط العام',
                'نقطة مؤثرة (Influential Point): تغير خط الانحدار بشكل كبير عند إزالتها',
                'يجب فحص هذه النقاط قبل الاعتماد على النموذج'
              ]},
              { title: 'التنبؤ', type: 'bullets', content: [
                'الاستكمال (Interpolation): التنبؤ ضمن نطاق البيانات (موثوق)',
                'الاستقراء (Extrapolation): التنبؤ خارج نطاق البيانات (أقل موثوقية)',
                'كلما ابتعدنا عن نطاق البيانات، قلّت دقة التنبؤ'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الدوال المثلثية',
      icon: '📐',
      color: 'from-indigo-500 to-blue-600',
      description: 'دراسة حساب المثلثات، الزوايا بالراديان والدرجات، النسب المثلثية على دائرة الوحدة، التمثيلات البيانية للدوال المثلثية ودوالها العكسية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: حساب المثلثات قائمة الزوايا',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'حساب المثلثات هو دراسة العلاقات بين أضلاع الزوايا وزواياها. في المثلث القائم، تُعرّف النسب المثلثية الست الأساسية بدلالة أضلاع المثلث.',
            sections: [
              { title: 'النسب المثلثية الأساسية', type: 'bullets', content: [
                'sin(\u03b8) = المقابل / الوتر = opp/hyp',
                'cos(\u03b8) = المجاور / الوتر = adj/hyp',
                'tan(\u03b8) = المقابل / المجاور = opp/adj'
              ]},
              { title: 'النسب المثلثية المقلوبة', type: 'bullets', content: [
                'csc(\u03b8) = 1/sin(\u03b8) = الوتر / المقابل',
                'sec(\u03b8) = 1/cos(\u03b8) = الوتر / المجاور',
                'cot(\u03b8) = 1/tan(\u03b8) = المجاور / المقابل'
              ]},
              { title: 'علاقات النسب المتبادلة', type: 'bullets', content: [
                'sin(\u03b8) = 1/csc(\u03b8)',
                'cos(\u03b8) = 1/sec(\u03b8)',
                'tan(\u03b8) = 1/cot(\u03b8)'
              ]},
              { title: 'نسبة الظل بدلالة الجيب وجيب التمام', type: 'formula', content: 'tan(\u03b8) = sin(\u03b8) / cos(\u03b8)' },
              { title: 'زوايا خاصة شائعة', type: 'bullets', content: [
                'sin(30\u00b0) = 1/2، cos(30\u00b0) = \u221a3/2، tan(30\u00b0) = 1/\u221a3',
                'sin(45\u00b0) = \u221a2/2، cos(45\u00b0) = \u221a2/2، tan(45\u00b0) = 1',
                'sin(60\u00b0) = \u221a3/2، cos(60\u00b0) = 1/2، tan(60\u00b0) = \u221a3'
              ]},
              { title: 'حل المثلث القائم', type: 'bullets', content: [
                'استخدم النسبة المناسبة بناءً على المعطيات',
                'إذا عرفت ضلعين: استخدم النسبة المثلثية المناسبة لإيجاد الزاوية',
                'إذا عرفت ضلع وزاوية: استخدم النسبة المثلثية لإيجاد الضلع المجهول'
              ]},
              { title: 'نظرية فيثاغورس', type: 'formula', content: 'a\u00b2 + b\u00b2 = c\u00b2 (حيث c الوتر)' }
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدرجات والراديان',
          icon: '🔄',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الراديان هو وحدة قياس الزوايا في الرياضيات المتقدمة. الزاوية بالراديان = طول القوس \u00f7 نصف القطر. الدورة الكاملة = 2\u03c0 راديان = 360\u00b0.',
            sections: [
              { title: 'العلاقة بين الدرجات والراديان', type: 'formula', content: '\u03c0 راديان = 180\u00b0' },
              { title: 'التحويل من درجات إلى راديان', type: 'formula', content: 'الراديان = الدرجات \u00d7 (\u03c0/180)' },
              { title: 'التحويل من راديان إلى درجات', type: 'formula', content: 'الدرجات = الراديان \u00d7 (180/\u03c0)' },
              { title: 'زوايا شائعة بالراديان', type: 'bullets', content: [
                '30\u00b0 = \u03c0/6',
                '45\u00b0 = \u03c0/4',
                '60\u00b0 = \u03c0/3',
                '90\u00b0 = \u03c0/2',
                '180\u00b0 = \u03c0',
                '270\u00b0 = 3\u03c0/2',
                '360\u00b0 = 2\u03c0'
              ]},
              { title: 'طول القوس', type: 'formula', content: 's = r\u00b7\u03b8 (حيث \u03b8 بالراديان)' },
              { title: 'مساحة القطاع الدائري', type: 'formula', content: 'A = \u00bd\u00b7r\u00b2\u00b7\u03b8 (حيث \u03b8 بالراديان)' },
              { title: 'الزوايا الموجبة والسالبة', type: 'bullets', content: [
                'الزاوية الموجبة: الدوران عكس عقارب الساعة',
                'الزاوية السالبة: الدوران مع عقارب الساعة',
                'الزوايا المتشاركة (Coterminal): \u03b8 و \u03b8 + 2k\u03c0 (حيث k عدد صحيح)'
              ]},
              { title: 'الزوايا المرجعية (Reference Angles)', type: 'bullets', content: [
                'الزاوية الحادة بين الضلع النهائي ومحور x',
                'الربع الأول: \u03b8\' = \u03b8',
                'الربع الثاني: \u03b8\' = \u03c0 - \u03b8 (أو 180\u00b0 - \u03b8)',
                'الربع الثالث: \u03b8\' = \u03b8 - \u03c0 (أو \u03b8 - 180\u00b0)',
                'الربع الرابع: \u03b8\' = 2\u03c0 - \u03b8 (أو 360\u00b0 - \u03b8)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: النسب المثلثية على دائرة الوحدة',
          icon: '⭕',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'دائرة الوحدة هي دائرة نصف قطرها 1 ومركزها نقطة الأصل. تُستخدم لتعريف النسب المثلثية لجميع الزوايا (وليس فقط زوايا المثلث القائم).',
            sections: [
              { title: 'معادلة دائرة الوحدة', type: 'formula', content: 'x\u00b2 + y\u00b2 = 1' },
              { title: 'تعريف النسب المثلثية على دائرة الوحدة', type: 'bullets', content: [
                'sin(\u03b8) = y (الإحداثي الصادي)',
                'cos(\u03b8) = x (الإحداثي السيني)',
                'tan(\u03b8) = y/x (عندما x \u2260 0)'
              ]},
              { title: 'النسب المثلثية المقلوبة', type: 'bullets', content: [
                'csc(\u03b8) = 1/y (عندما y \u2260 0)',
                'sec(\u03b8) = 1/x (عندما x \u2260 0)',
                'cot(\u03b8) = x/y (عندما y \u2260 0)'
              ]},
              { title: 'إشارات النسب المثلثية في الأرباع', type: 'bullets', content: [
                'الربع الأول (0 إلى \u03c0/2): جميع النسب موجبة (+)',
                'الربع الثاني (\u03c0/2 إلى \u03c0): sin فقط موجبة (+)',
                'الربع الثالث (\u03c0 إلى 3\u03c0/2): tan فقط موجبة (+)',
                'الربع الرابع (3\u03c0/2 إلى 2\u03c0): cos فقط موجبة (+)',
                'تذكر: "All Students Take Calculus" (ASTC)'
              ]},
              { title: 'نقاط مهمة على دائرة الوحدة', type: 'bullets', content: [
                '(1, 0) عند \u03b8 = 0',
                '(0, 1) عند \u03b8 = \u03c0/2',
                '(-1, 0) عند \u03b8 = \u03c0',
                '(0, -1) عند \u03b8 = 3\u03c0/2',
                '(\u221a2/2, \u221a2/2) عند \u03b8 = \u03c0/4',
                '(\u221a3/2, 1/2) عند \u03b8 = \u03c0/6',
                '(1/2, \u221a3/2) عند \u03b8 = \u03c0/3'
              ]},
              { title: 'المتطابقات المثلثية الأساسية', type: 'formula', content: 'sin\u00b2(\u03b8) + cos\u00b2(\u03b8) = 1' },
              { title: 'متطابقات أخرى', type: 'bullets', content: [
                '1 + tan\u00b2(\u03b8) = sec\u00b2(\u03b8)',
                '1 + cot\u00b2(\u03b8) = csc\u00b2(\u03b8)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: التمثيل البياني للدوال sin و cos',
          icon: '🌊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال المثلثية دوال دورية، أي تتكرر قيمها على فترات منتظمة. دور كل من sin و cos هو 2\u03c0، ويمثلان منحنيات ملساء تسمى موجات جيبية.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'y = a\u00b7sin(b(x - h)) + k أو y = a\u00b7cos(b(x - h)) + k' },
              { title: 'السعة (Amplitude)', type: 'formula', content: '|a| = (القيمة العظمى - القيمة الصغرى) / 2' },
              { title: 'الدور (Period)', type: 'formula', content: 'T = 2\u03c0/|b|' },
              { title: 'الإزاحة الأفقية (Phase Shift)', type: 'formula', content: 'h (موجبة لليمين، سالبة لليسار)' },
              { title: 'الإزاحة الرأسية (Vertical Shift)', type: 'formula', content: 'k (خط المنتصف: y = k)' },
              { title: 'خصائص دالة sin', type: 'bullets', content: [
                'المجال: جميع الأعداد الحقيقية',
                'المدى: [-1, 1] (لـ y = sin x)',
                'دالة فردية: sin(-x) = -sin(x) (متناظرة حول نقطة الأصل)',
                'تبدأ من (0, 0) في الحالة الأساسية'
              ]},
              { title: 'خصائص دالة cos', type: 'bullets', content: [
                'المجال: جميع الأعداد الحقيقية',
                'المدى: [-1, 1] (لـ y = cos x)',
                'دالة زوجية: cos(-x) = cos(x) (متناظرة حول محور y)',
                'تبدأ من (0, 1) في الحالة الأساسية'
              ]},
              { title: 'العلاقة بين sin و cos', type: 'formula', content: 'cos(x) = sin(x + \u03c0/2)' },
              { title: 'خطوات الرسم', type: 'bullets', content: [
                '1. حدد السعة |a| والدور 2\u03c0/|b|',
                '2. حدد الإزاحة الأفقية h والرأسية k',
                '3. ارسم خط المنتصف y = k',
                '4. ارسل الحد الأعلى y = k + |a| والحد الأدنى y = k - |a|',
                '5. قسم الدورة إلى 4 أجزاء متساوية',
                '6. ارسم المنحنى المار بالنقاط الرئيسية'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: التمثيل البياني للدوال المثلثية الأخرى',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال المثلثية الأخرى (tan, cot, sec, csc) لها خصائص وتمثيلات بيانية مختلفة عن sin و cos، مع تقاربات وتقطعات.',
            sections: [
              { title: 'دالة الظل tan', type: 'bullets', content: [
                'y = tan(x) = sin(x)/cos(x)',
                'الدور: \u03c0 (أصغر من sin و cos)',
                'تقاربات رأسية عند x = \u03c0/2 + k\u03c0',
                'دالة فردية: tan(-x) = -tan(x)',
                'المجال: جميع الأعداد ما عدا x = \u03c0/2 + k\u03c0',
                'المدى: جميع الأعداد الحقيقية'
              ]},
              { title: 'دالة ظل التمام cot', type: 'bullets', content: [
                'y = cot(x) = cos(x)/sin(x)',
                'الدور: \u03c0',
                'تقاربات رأسية عند x = k\u03c0',
                'دالة فردية: cot(-x) = -cot(x)',
                'المجال: جميع الأعداد ما عدا x = k\u03c0',
                'المدى: جميع الأعداد الحقيقية'
              ]},
              { title: 'دالة القاطع sec', type: 'bullets', content: [
                'y = sec(x) = 1/cos(x)',
                'الدور: 2\u03c0',
                'تقاربات رأسية حيث cos(x) = 0 (أي x = \u03c0/2 + k\u03c0)',
                'دالة زوجية: sec(-x) = sec(x)',
                'المدى: (-\u221e, -1] \u222a [1, \u221e)',
                'لا توجد قيم بين -1 و 1'
              ]},
              { title: 'دالة القاطع التمام csc', type: 'bullets', content: [
                'y = csc(x) = 1/sin(x)',
                'الدور: 2\u03c0',
                'تقاربات رأسية حيث sin(x) = 0 (أي x = k\u03c0)',
                'دالة فردية: csc(-x) = -csc(x)',
                'المدى: (-\u221e, -1] \u222a [1, \u221e)',
                'لا توجد قيم بين -1 و 1'
              ]},
              { title: 'الصيغة العامة للتحويلات', type: 'formula', content: 'y = a\u00b7tan(b(x - h)) + k (أو sec, csc, cot)' },
              { title: 'الدور للدوال الأخرى', type: 'bullets', content: [
                'لـ tan و cot: T = \u03c0/|b|',
                'لـ sec و csc: T = 2\u03c0/|b|'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس السادس: الدوال المثلثية العكسية',
          icon: '↔️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-math-T1-3.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال المثلثية العكسية تعكس تأثير الدوال المثلثية. لإيجاد دالة عكسية، يجب تقييد مجال الدالة الأصلية لتكون واحد لواحد.',
            sections: [
              { title: 'الدالة العكسية للجيب', type: 'bullets', content: [
                'y = sin\u207b\u00b9(x) أو arcsin(x)',
                'المجال: [-1, 1]',
                'المدى: [-\u03c0/2, \u03c0/2] (من -90\u00b0 إلى 90\u00b0)',
                'sin(sin\u207b\u00b9(x)) = x لكل x في [-1, 1]',
                'sin\u207b\u00b9(sin(x)) = x فقط إذا x في [-\u03c0/2, \u03c0/2]'
              ]},
              { title: 'الدالة العكسية لجيب التمام', type: 'bullets', content: [
                'y = cos\u207b\u00b9(x) أو arccos(x)',
                'المجال: [-1, 1]',
                'المدى: [0, \u03c0] (من 0\u00b0 إلى 180\u00b0)',
                'cos(cos\u207b\u00b9(x)) = x لكل x في [-1, 1]',
                'cos\u207b\u00b9(cos(x)) = x فقط إذا x في [0, \u03c0]'
              ]},
              { title: 'الدالة العكسية للظل', type: 'bullets', content: [
                'y = tan\u207b\u00b9(x) أو arctan(x)',
                'المجال: جميع الأعداد الحقيقية',
                'المدى: (-\u03c0/2, \u03c0/2)',
                'tan(tan\u207b\u00b9(x)) = x لكل x',
                'تقاربات أفقية: y = \u03c0/2 و y = -\u03c0/2'
              ]},
              { title: 'قيم شائعة', type: 'bullets', content: [
                'sin\u207b\u00b9(1/2) = \u03c0/6 (30\u00b0)',
                'sin\u207b\u00b9(\u221a2/2) = \u03c0/4 (45\u00b0)',
                'sin\u207b\u00b9(\u221a3/2) = \u03c0/3 (60\u00b0)',
                'cos\u207b\u00b9(1/2) = \u03c0/3 (60\u00b0)',
                'cos\u207b\u00b9(\u221a2/2) = \u03c0/4 (45\u00b0)',
                'cos\u207b\u00b9(\u221a3/2) = \u03c0/6 (30\u00b0)',
                'tan\u207b\u00b9(1) = \u03c0/4 (45\u00b0)',
                'tan\u207b\u00b9(\u221a3) = \u03c0/3 (60\u00b0)',
                'tan\u207b\u00b9(1/\u221a3) = \u03c0/6 (30\u00b0)'
              ]},
              { title: 'تركيب الدوال المثلثية والعكسية', type: 'bullets', content: [
                'sin(cos\u207b\u00b9(x)) = \u221a(1 - x\u00b2)',
                'cos(sin\u207b\u00b9(x)) = \u221a(1 - x\u00b2)',
                'tan(sin\u207b\u00b9(x)) = x/\u221a(1 - x\u00b2)'
              ]},
              { title: 'حل المعادلات المثلثية', type: 'bullets', content: [
                'استخدم الدوال العكسية لإيجاد الزاوية المرجعية',
                'حدد جميع الحلول في الفترة المطلوبة باستخدام الدورية',
                'تحقق من إشارات النسب في كل ربع'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const math12General1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: الدوال من منظور حساب التفاضل والتكامل',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة الدوال وخصائصها من منظور حساب التفاضل والتكامل، بما في ذلك تحليل التمثيلات البيانية، الاتصال، النهايات، القيم القصوى، معدل التغير، والتحويلات.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الدوال',
          icon: 'ƒ(x)',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة هي علاقة تربط كل عنصر من المجال (Domain) بعنصر واحد فقط من المدى (Range). تُعد الدوال الأساس في الرياضيات وتستخدم لنمذجة العلاقات بين الكميات.',
            sections: [
              { title: 'تعريف الدالة', type: 'text', content: 'دالة من X إلى Y هي قاعدة تربط كل x \u2208 X بقيمة y \u2208 Y واحدة فقط' },
              { title: 'المجال والمدى', type: 'bullets', content: [
                'المجال (Domain): مجموعة جميع قيم x الممكنة',
                'المدى (Range): مجموعة جميع قيم y الناتجة',
                'اختبار الخط الرأسي: إذا قطع الخط الرأسي المنحنى في أكثر من نقطة، فهو ليس دالة'
              ]},
              { title: 'أنواع الدوال', type: 'bullets', content: [
                'خطية: f(x) = mx + b',
                'تربيعية: f(x) = ax² + bx + c',
                'تكعيبية: f(x) = ax³ + bx² + cx + d',
                'قيمة مطلقة: f(x) = |x|',
                'كسرية: f(x) = p(x)/q(x) حيث q(x) \u2260 0'
              ]},
              { title: 'تمثيل الدالة', type: 'bullets', content: [
                'صيغة جبرية (معادلة)',
                'تمثيل بياني (منحنى)',
                'جدول قيم',
                'وصف لفظي'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: تحليل التمثيلات البيانية للدوال والعلاقات',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التمثيل البياني للدالة يعطينا صورة بصرية لسلوك الدالة، ويساعدنا على تحديد خصائصها مثل التقاطعات، التناظر، والفترات المتزايدة والمتناقصة.',
            sections: [
              { title: 'التقاطعات', type: 'bullets', content: [
                'تقاطع y: نعوض x = 0 ونجد f(0)',
                'تقاطع x: نحل المعادلة f(x) = 0'
              ]},
              { title: 'التناظر', type: 'bullets', content: [
                'دالة زوجية (متناظرة حول محور y): f(-x) = f(x)',
                'دالة فردية (متناظرة حول نقطة الأصل): f(-x) = -f(x)',
                'لا تناظر: إذا لم تتحقق أي من الحالتين'
              ]},
              { title: 'الفترات المتزايدة والمتناقصة', type: 'bullets', content: [
                'متزايدة: إذا زاد x زادت f(x) (الميل موجب)',
                'متناقصة: إذا زاد x نقصت f(x) (الميل سالب)',
                'ثابتة: f(x) لا تتغير مع تغير x (الميل = 0)'
              ]},
              { title: 'القيم العظمى والصغرى', type: 'bullets', content: [
                'قيمة عظمى محلية: f(c) \u2265 f(x) لكل x قريب من c',
                'قيمة صغرى محلية: f(c) \u2264 f(x) لكل x قريب من c',
                'قيمة عظمى مطلقة: أكبر قيمة للدالة بأكملها',
                'قيمة صغرى مطلقة: أصغر قيمة للدالة بأكملها'
              ]},
              { title: 'السلوك النهائي (End Behavior)', type: 'bullets', content: [
                'يصف سلوك الدالة عندما x \u2192 \u221e أو x \u2192 -\u221e',
                'مهم لتحديد التقارب الأفقي'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: الاتصال والسلوك الطرفي والنهايات',
          icon: '🔗',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الاتصال مفهوم أساسي في حساب التفاضل والتكامل، والنهايات هي الأداة الرياضية التي نستخدمها لدراسة سلوك الدالة عند نقاط معينة أو عند اللانهاية.',
            sections: [
              { title: 'النهاية', type: 'formula', content: 'lim(x\u2192a) f(x) = L' },
              { title: 'شروط وجود النهاية', type: 'bullets', content: [
                'lim(x\u2192a\u207b) f(x) = lim(x\u2192a\u207a) f(x) = L',
                'النهاية من اليسار = النهاية من اليمين',
                'النهاية موجودة حتى لو كانت الدالة غير معرفة عند a'
              ]},
              { title: 'الاتصال', type: 'formula', content: 'الدالة f متصلة عند a إذا: lim(x\u2192a) f(x) = f(a)' },
              { title: 'شروط الاتصال الثلاثة', type: 'bullets', content: [
                'f(a) معرفة (الدالة معرفة عند النقطة)',
                'lim(x\u2192a) f(x) موجود',
                'النهاية تساوي قيمة الدالة: lim(x\u2192a) f(x) = f(a)'
              ]},
              { title: 'أنواع الانفصال', type: 'bullets', content: [
                'انفصال قابل للإزالة (ثقب): النهاية موجودة لكن \u2260 f(a)',
                'انفصال قفزي: النهاية من اليسار \u2260 النهاية من اليمين',
                'انفصال لا نهائي: الدالة تذهب إلى \u00b1\u221e (خط تقارب رأسي)'
              ]},
              { title: 'السلوك النهائي والتقارب الأفقي', type: 'bullets', content: [
                'lim(x\u2192\u221e) f(x) = L يعني y = L تقارب أفقي',
                'lim(x\u2192-\u221e) f(x) = L يعني y = L تقارب أفقي',
                'للكسرية: نقسم البسط والمقام على أعلى قوة لـ x'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: القيم القصوى ومتوسط ومعدل التغير',
          icon: '📉',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'معدل التغير يقيس كيف تتغير كمية بالنسبة لكمية أخرى. القيم القصوى (العظمى والصغرى) هي النقاط التي تصل عندها الدالة إلى أعلى أو أدنى قيمة.',
            sections: [
              { title: 'متوسط معدل التغير', type: 'formula', content: 'Average Rate = [f(b) - f(a)] / (b - a)' },
              { title: 'معدل التغير اللحظي', type: 'formula', content: 'Instantaneous Rate = lim(h\u21920) [f(x+h) - f(x)] / h' },
              { title: 'النقاط الحرجة', type: 'bullets', content: [
                'النقاط التي يكون عندها الميل = 0 أو الميل غير معرف',
                'قد تكون قيم عظمى أو صغرى أو نقطة انعطاف'
              ]},
              { title: 'اختبار المشتقة الأولى', type: 'bullets', content: [
                "إذا تغيرت f' من + إلى - عند c: قيمة عظمى محلية",
                "إذا تغيرت f' من - إلى + عند c: قيمة صغرى محلية",
                'إذا لم تتغير الإشارة: ليست قيمة قصوى'
              ]},
              { title: 'اختبار المشتقة الثانية', type: 'bullets', content: [
                "إذا f'(c) = 0 و f''(c) < 0: قيمة عظمى محلية (مقعرة لأسفل)",
                "إذا f'(c) = 0 و f''(c) > 0: قيمة صغرى محلية (مقعرة لأعلى)",
                "إذا f''(c) = 0: الاختبار غير حاسم"
              ]},
              { title: 'التقعر ونقاط الانعطاف', type: 'bullets', content: [
                "f''(x) > 0: الدالة مقعرة لأعلى (concave up)",
                "f''(x) < 0: الدالة مقعرة لأسفل (concave down)",
                'نقطة الانعطاف: حيث يتغير التقعر'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الدوال الأصلية والتحويلات',
          icon: '🔄',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال الأصلية (Parent Functions) هي أبسط صور الدوال في كل عائلة. التحويلات تسمح لنا بتحريك، تكبير، تصغير، أو قلب هذه الدوال للحصول على دوال جديدة.',
            sections: [
              { title: 'الدوال الأصلية الأساسية', type: 'bullets', content: [
                'الخطية: f(x) = x',
                'التربيعية: f(x) = x²',
                'التكعيبية: f(x) = x³',
                'القيمة المطلقة: f(x) = |x|',
                'الجذرية: f(x) = \u221ax',
                'المقلوبة: f(x) = 1/x',
                'الأسية: f(x) = e\u02e3',
                'اللوغاريتمية: f(x) = ln x'
              ]},
              { title: 'الإزاحة الأفقية والرأسية', type: 'formula', content: 'g(x) = a\u00b7f(x - h) + k' },
              { title: 'قواعد التحويل', type: 'bullets', content: [
                '+k: إزاحة لأعلى بمقدار k',
                '-k: إزاحة لأسفل بمقدار k',
                '(x - h): إزاحة لليمين بمقدار h',
                '(x + h): إزاحة لليسار بمقدار h'
              ]},
              { title: 'التمدد والانكماش', type: 'bullets', content: [
                '|a| > 1: تمدد رأسي بمقدار a',
                '0 < |a| < 1: انكماش رأسي بمقدار a',
                '0 < |b| < 1: تمدد أفقي بمقدار 1/b',
                '|b| > 1: انكماش أفقي بمقدار 1/b'
              ]},
              { title: 'الانعكاسات', type: 'bullets', content: [
                '-f(x): انعكاس حول محور x',
                'f(-x): انعكاس حول محور y'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس السادس: العمليات على الدوال وتركيب الدوال',
          icon: '➕',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'يمكننا إجراء العمليات الحسابية الأساسية على الدوال (الجمع، الطرح، الضرب، القسمة) كما يمكننا تركيب دالتين للحصول على دالة جديدة.',
            sections: [
              { title: 'مجموع دالتين', type: 'formula', content: '(f + g)(x) = f(x) + g(x)' },
              { title: 'فرق دالتين', type: 'formula', content: '(f - g)(x) = f(x) - g(x)' },
              { title: 'ضرب دالتين', type: 'formula', content: '(f \u00b7 g)(x) = f(x) \u00b7 g(x)' },
              { title: 'قسمة دالتين', type: 'formula', content: '(f / g)(x) = f(x) / g(x) حيث g(x) \u2260 0' },
              { title: 'تركيب الدوال', type: 'formula', content: '(f \u2218 g)(x) = f(g(x))' },
              { title: 'قواعد التركيب', type: 'bullets', content: [
                'نطبق الدالة الداخلية g أولاً',
                'ثم نطبق الدالة الخارجية f على الناتج',
                'المجال: x يجب أن يكون في مجال g، و g(x) يجب أن يكون في مجال f',
                'التركيب ليس تبديلياً: f(g(x)) \u2260 g(f(x)) بشكل عام'
              ]},
              { title: 'مثال على التركيب', type: 'text', content: 'إذا كانت f(x) = x² و g(x) = x + 1، فإن (f \u2218 g)(x) = f(g(x)) = (x + 1)²' }
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس السابع: العلاقات والدوال العكسية',
          icon: '↔️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة العكسية "تعكس" تأثير الدالة الأصلية. إذا كانت f تحول x إلى y، فإن f\u207b\u00b9 تحول y إلى x. الدالة العكسية موجودة فقط إذا كانت الدالة الأصلية واحد لواحد.',
            sections: [
              { title: 'الدالة واحد لواحد', type: 'bullets', content: [
                'كل عنصر في المدى يقابله عنصر واحد فقط في المجال',
                'اختبار الخط الأفقي: إذا قطع أي خط أفقي المنحنى في أكثر من نقطة، الدالة ليست واحد لواحد'
              ]},
              { title: 'رمز الدالة العكسية', type: 'formula', content: 'f\u207b\u00b9(x) (ليس 1/f(x))' },
              { title: 'خصائص الدالة العكسية', type: 'bullets', content: [
                'f(f\u207b\u00b9(x)) = x لكل x في مجال f\u207b\u00b9',
                'f\u207b\u00b9(f(x)) = x لكل x في مجال f',
                'مجال f = مدى f\u207b\u00b9',
                'مدى f = مجال f\u207b\u00b9'
              ]},
              { title: 'إيجاد الدالة العكسية', type: 'bullets', content: [
                '1. استبدل f(x) بـ y',
                '2. بدل بين x و y',
                '3. حل المعادلة لإيجاد y',
                '4. استبدل y بـ f\u207b\u00b9(x)'
              ]},
              { title: 'التمثيل البياني', type: 'bullets', content: [
                'رسم f ورسم f\u207b\u00b9 متناظران حول الخط y = x',
                'إذا كانت النقطة (a, b) على f، فإن (b, a) على f\u207b\u00b9'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: دوال القوة وكثيرات الحدود والنسبية',
      icon: '🔢',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة دوال القوة والدوال الجذرية، كثيرات الحدود، الدوال النسبية، المتباينات غير الخطية، ونظريتا الباقي والعامل.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: دوال القوة والدوال الجذرية',
          icon: 'xⁿ',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'دوال القوة هي دوال على الصورة f(x) = xⁿ. الدوال الجذرية هي دوال تحتوي على جذر، وهي الحالة الخاصة عندما n كسر.',
            sections: [
              { title: 'دالة القوة', type: 'formula', content: 'f(x) = xⁿ' },
              { title: 'خصائص دوال القوة', type: 'bullets', content: [
                'n صحيح موجب زوجي: المنحنى على شكل U، المجال جميع الأعداد الحقيقية، المدى y \u2265 0',
                'n صحيح موجب فردي: المنحنى على شكل S، المجال والمدى جميع الأعداد الحقيقية',
                'n سالب: تقارب عند المحاور، x \u2260 0'
              ]},
              { title: 'الدوان الجذرية', type: 'formula', content: 'f(x) = \u207f\u221ax = x^(1/n)' },
              { title: 'أمثلة على الدوال الجذرية', type: 'bullets', content: [
                'f(x) = \u221ax = x^(1/2): المجال x \u2265 0',
                'f(x) = \u221bx = x^(1/3): المجال جميع الأعداد الحقيقية',
                'f(x) = \u2074\u221ax = x^(1/4): المجال x \u2265 0'
              ]},
              { title: 'تحويلات دوال القوة', type: 'formula', content: 'g(x) = a\u00b7(x - h)\u207f + k' },
              { title: 'قواعد التحويل', type: 'bullets', content: [
                'h: إزاحة أفقية (يمين/يسار)',
                'k: إزاحة رأسية (أعلى/أسفل)',
                'a: تمدد/انكماش رأسي وانعكاس'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدوال كثيرة الحدود',
          icon: '∑',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'كثيرات الحدود هي تعبيرات جبرية مكونة من حدود على الصورة ax\u207f حيث n عدد صحيح غير سالب. درجة كثير الحدود تحدد سلوكه العام.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'P(x) = a\u207fx\u207f + a\u207f\u207b\u2081x\u207f\u207b\u2081 + ... + a\u2081x + a\u2080' },
              { title: 'المصطلحات الأساسية', type: 'bullets', content: [
                'الدرجة (Degree): أكبر أس لـ x (n)',
                'المعامل الرئيسي (Leading Coefficient): a\u207f',
                'الحد الثابت (Constant Term): a\u2080'
              ]},
              { title: 'السلوك النهائي (End Behavior)', type: 'bullets', content: [
                'درجة زوجية، معامل رئيسي موجب: x\u2192\u00b1\u221e \u21d2 P(x)\u2192+\u221e',
                'درجة زوجية، معامل رئيسي سالب: x\u2192\u00b1\u221e \u21d2 P(x)\u2192-\u221e',
                'درجة فردية، معامل رئيسي موجب: x\u2192-\u221e \u21d2 P(x)\u2192-\u221e، x\u2192+\u221e \u21d2 P(x)\u2192+\u221e',
                'درجة فردية، معامل رئيسي سالب: x\u2192-\u221e \u21d2 P(x)\u2192+\u221e، x\u2192+\u221e \u21d2 P(x)\u2192-\u221e'
              ]},
              { title: 'عدد الأصفار والتقاطعات', type: 'bullets', content: [
                'كثير حدود من الدرجة n له على الأكثر n صفر حقيقي',
                'عدد تقاطعات x على الأكثر n',
                'عدد النقاط الحرجة على الأكثر n-1',
                'عدد نقاط الانعطاف على الأكثر n-2'
              ]},
              { title: 'الانضغاط (Multiplicities)', type: 'bullets', content: [
                'تعدد فردي: المنحنى يعبر محور x',
                'تعدد زوجي: المنحنى يلامس محور x ويرتد',
                'كلما زاد التعدد، أصبح المنحنى أكثر تسطحاً عند الصفر'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: نظريتا الباقي والعامل',
          icon: '📏',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نظريتا الباقي والعامل هما أداتان قويتان تربطان بين قسمة كثيرات الحدود وأصفارها، وتساعداننا على تحليل الدوال وإيجاد جذورها.',
            sections: [
              { title: 'نظرية الباقي', type: 'formula', content: 'إذا قُسم P(x) على (x - a)، فإن الباقي = P(a)' },
              { title: 'تطبيقات نظرية الباقي', type: 'bullets', content: [
                'إيجاد قيمة كثير الحدود عند نقطة معينة بسرعة',
                'التحقق من صحة القسمة التركيبية',
                'P(a) = الباقي عند القسمة على (x - a)'
              ]},
              { title: 'نظرية العامل', type: 'formula', content: '(x - a) عامل لـ P(x) إذا وفقط إذا P(a) = 0' },
              { title: 'تطبيقات نظرية العامل', type: 'bullets', content: [
                'التحقق من أن (x - a) عامل: نعوض P(a) = 0',
                'إيجاد الأصفار: نحل P(a) = 0',
                'تحليل كثيرات الحدود إلى عواملها'
              ]},
              { title: 'القسمة التركيبية', type: 'bullets', content: [
                'طريقة مختصرة لقسمة كثير حدود على (x - c)',
                'أسرع من القسمة الطويلة',
                'تستخدم لإيجاد الباقي والعوامل'
              ]},
              { title: 'نظرية الأصفار النسبية (Rational Zero Theorem)', type: 'formula', content: 'الأصفار النسبية المحتملة = \u00b1(عوامل الحد الثابت) / (عوامل المعامل الرئيسي)' }
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: أصفار الدوال كثيرة الحدود',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'أصفار كثير الحدود (أو جذوره) هي قيم x التي تجعل P(x) = 0. إيجاد الأصفار يساعد في رسم المنحنى وحل المعادلات.',
            sections: [
              { title: 'الأصفار الحقيقية', type: 'bullets', content: [
                'نقاط تقاطع المنحنى مع محور x',
                'حلول المعادلة P(x) = 0',
                'قد تكون نسبية أو غير نسبية'
              ]},
              { title: 'نظرية الأصفار النسبية', type: 'formula', content: 'p/q حيث p عامل للحد الثابت و q عامل للمعامل الرئيسي' },
              { title: 'الخطوات العملية لإيجاد الأصفار', type: 'bullets', content: [
                '1. اكتب جميع الأصفار النسبية المحتملة',
                '2. اختبر كل قيمة باستخدام التعويض أو القسمة التركيبية',
                '3. عند إيجاد صفر، اقسم كثير الحدود على (x - a)',
                '4. كرر العملية مع الناتج حتى تصل إلى تربيعي',
                '5. استخدم القانون العام أو التحليل'
              ]},
              { title: 'القانون العام (للتربيعي)', type: 'formula', content: 'x = [-b \u00b1 \u221a(b\u00b2 - 4ac)] / 2a' },
              { title: 'المميز (Discriminant)', type: 'bullets', content: [
                '\u0394 = b\u00b2 - 4ac',
                '\u0394 > 0: جذران حقيقيان مختلفان',
                '\u0394 = 0: جذر حقيقي مكرر',
                '\u0394 < 0: لا جذور حقيقية (جذران مركبان)'
              ]},
              { title: 'نظرية الجذور الأساسية', type: 'text', content: 'كثير حدود من الدرجة n له بالضبط n جذر في مجموعة الأعداد المركبة (مع احتساب التعدد)' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الدوال النسبية',
          icon: '÷',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة النسبية هي خارج قسمة كثيري حدود. لها خصائص مميزة مثل التقاربات الرأسية والأفقية التي نحتاج لدراستها لفهم سلوكها.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = P(x) / Q(x) حيث Q(x) \u2260 0' },
              { title: 'المجال', type: 'bullets', content: [
                'جميع الأعداد الحقيقية ما عدا قيم x التي تجعل Q(x) = 0',
                'هذه القيم تعطينا التقاربات الرأسية (أو الثقوب)'
              ]},
              { title: 'التقارب الرأسي (Vertical Asymptote)', type: 'bullets', content: [
                'x = a تقارب رأسي إذا كانت f(x) \u2192 \u00b1\u221e عندما x \u2192 a',
                'يحدث عندما يكون المقام = 0 والبسط \u2260 0 عند x = a',
                'إذا كان البسط = 0 أيضاً: قد يكون ثقب (انفصال قابل للإزالة)'
              ]},
              { title: 'التقارب الأفقي (Horizontal Asymptote)', type: 'bullets', content: [
                'إذا درجة البسط < درجة المقام: y = 0',
                'إذا درجة البسط = درجة المقام: y = (المعامل الرئيسي للبسط) / (المعامل الرئيسي للمقام)',
                'إذا درجة البسط > درجة المقام: لا يوجد تقارب أفقي'
              ]},
              { title: 'التقارب المائل (Oblique Asymptote)', type: 'bullets', content: [
                'يحدث عندما درجة البسط = درجة المقام + 1',
                'نوجد بقسمة كثيري الحدود (قسمة طويلة)',
                'الناتج (بدون الباقي) هو معادابة التقارب المائل: y = mx + b'
              ]},
              { title: 'الثقوب (Holes)', type: 'bullets', content: [
                'تحدث عندما يكون هناك عامل مشترك بين البسط والمقام',
                'x = a ثقب إذا كان (x - a) عامل مشترك',
                'نبسط الدالة بإلغاء العامل المشترك'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس السادس: المتباينات غير الخطية',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتباينات غير الخطية تتضمن كثيرات حدود أو دوال نسبية. نحلها بإيجاد النقاط الحرجة واختبار الفترات.',
            sections: [
              { title: 'خطوات حل المتباينات', type: 'bullets', content: [
                '1. حوّل المتباينة إلى صورة f(x) > 0 أو f(x) < 0',
                '2. أوجد الأصفار (حيث f(x) = 0)',
                '3. أوجد القيم التي تجعل الدالة غير معرفة (للكسرية)',
                '4. رتب النقاط على خط الأعداد',
                '5. اختبر إشارة f(x) في كل فترة',
                '6. حدد الفترات التي تحقق المتباينة'
              ]},
              { title: 'المتباينات كثيرة الحدود', type: 'bullets', content: [
                'مثال: x² - 5x + 6 > 0',
                'نحل: (x - 2)(x - 3) = 0 \u21d2 x = 2, x = 3',
                'نختبر الفترات: (-\u221e, 2)، (2, 3)، (3, \u221e)',
                'الحل: x < 2 أو x > 3'
              ]},
              { title: 'المتباينات النسبية', type: 'bullets', content: [
                'مثال: (x - 1)/(x + 2) \u2264 0',
                'النقاط الحرجة: x = 1 (بسط = 0)، x = -2 (مقام = 0)',
                'نختبر الفترات: (-\u221e, -2)، (-2, 1]، [1, \u221e)',
                'الحل: -2 < x \u2264 1 (نلاحظ: -2 غير مشمولة لأن المقام = 0)'
              ]},
              { title: 'قواعد الإشارات', type: 'bullets', content: [
                '(+)(+) = (+)، (-)(-) = (+)',
                '(+)(-) = (-)، (-)(+) = (-)',
                'متباينة صارمة (< أو >): لا تشمل النقاط الحرجة',
                'متباينة غير صارمة (\u2264 أو \u2265): تشمل النقاط الحرجة (ما عدا حيث المقام = 0)'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الدوال الأسية واللوغاريتمية',
      icon: '📈',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة الدوال الأسية واللوغاريتمية، خصائص اللوغاريتمات، حل المعادلات الأسية واللوغاريتمية، والانحدار الخطي.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الدوال الأسية',
          icon: 'e\u02e3',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة الأسية هي دالة يكون فيها المتغير في الأس. تنمو أو تتناقص بمعدل يتناسب مع قيمتها الحالية، وتستخدم لنمذجة النمو السكاني، الاضمحلال الإشعاعي، والفائدة المركبة.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = a\u00b7b\u02e3' },
              { title: 'شروط الأساس b', type: 'bullets', content: [
                'b > 0 و b \u2260 1',
                'إذا b > 1: دالة أسية متزايدة (نمو)',
                'إذا 0 < b < 1: دالة أسية متناقصة (اضمحلال)'
              ]},
              { title: 'خصائص الدالة الأسية', type: 'bullets', content: [
                'المجال: جميع الأعداد الحقيقية (-\u221e, \u221e)',
                'المدى: (0, \u221e) فقط (دائماً موجبة)',
                'تقاطع y: (0, a) لأن b\u2070 = 1',
                'لا يوجد تقاطع x (الدالة لا تساوي صفر أبداً)',
                'تقارب أفقي: y = 0'
              ]},
              { title: 'قوانين الأسس', type: 'bullets', content: [
                'b\u1d50 \u00b7 b\u207f = b\u1d50\u207a\u207f',
                'b\u1d50 / b\u207f = b\u1d50\u207b\u207f',
                '(b\u1d50)\u207f = b\u1d50\u207f',
                'b\u2070 = 1',
                'b\u207b\u207f = 1/b\u207f'
              ]},
              { title: 'الدالة الأسية الطبيعية', type: 'formula', content: 'f(x) = a\u00b7e\u02e3 حيث e \u2248 2.718' },
              { title: 'تطبيقات', type: 'bullets', content: [
                'النمو السكاني: P(t) = P\u2080\u00b7e\u02e3\u1d57',
                'الاضمحلال الإشعاعي: A(t) = A\u2080\u00b7e\u207b\u1d4f\u1d57',
                'الفائدة المركبة المستمرة: A = P\u00b7e\u02e3\u1d57'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدوال اللوغاريتمية',
          icon: 'log',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة اللوغاريتمية هي الدالة العكسية للدالة الأسية. اللوغاريتم يجيب على السؤال: "ما الأس الذي يجب رفع الأساس إليه للحصول على هذا العدد؟"',
            sections: [
              { title: 'تعريف اللوغاريتم', type: 'formula', content: 'log_b(x) = y إذا وفقط إذا b\u02e4 = x' },
              { title: 'شروط اللوغاريتم', type: 'bullets', content: [
                'الأساس b > 0 و b \u2260 1',
                'المحتوى x > 0 (لا يوجد لوغاريتم لصفر أو عدد سالب)',
                'log_b(1) = 0 دائماً لأن b\u2070 = 1'
              ]},
              { title: 'أنواع اللوغاريتمات', type: 'bullets', content: [
                'اللوغاريتم المشترك: log(x) = log\u2081\u2080(x)',
                'اللوغاريتم الطبيعي: ln(x) = log_e(x) حيث e \u2248 2.718'
              ]},
              { title: 'خصائص الدالة اللوغاريتمية', type: 'bullets', content: [
                'المجال: (0, \u221e)',
                'المدى: (-\u221e, \u221e)',
                'تقاطع x: (1, 0) لأن log_b(1) = 0',
                'لا يوجد تقاطع y',
                'تقارب رأسي: x = 0'
              ]},
              { title: 'العلاقة مع الدالة الأسية', type: 'bullets', content: [
                'f(x) = b\u02e3 و g(x) = log_b(x) دالتان عكسيتان',
                'f(g(x)) = x و g(f(x)) = x',
                'التمثيلان البيانيان متناظران حول y = x'
              ]},
              { title: 'تحويل بين الصيغ', type: 'formula', content: 'y = log_b(x) \u27fa b\u02e4 = x' }
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: خصائص اللوغاريتمات',
          icon: '🔧',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خصائص اللوغاريتمات تسمح لنا بتبسيط التعبيرات اللوغاريتمية المعقدة، وفك اللوغاريتمات، وحل المعادلات.',
            sections: [
              { title: 'خاصية الضرب (حاصل الضرب)', type: 'formula', content: 'log_b(MN) = log_b(M) + log_b(N)' },
              { title: 'خاصية القسمة (حاصل القسمة)', type: 'formula', content: 'log_b(M/N) = log_b(M) - log_b(N)' },
              { title: 'خاصية القوة', type: 'formula', content: 'log_b(M\u207f) = n\u00b7log_b(M)' },
              { title: 'خصائص أساسية أخرى', type: 'bullets', content: [
                'log_b(1) = 0',
                'log_b(b) = 1',
                'log_b(b\u207f) = n',
                'b^(log_b(x)) = x'
              ]},
              { title: 'تغيير الأساس', type: 'formula', content: 'log_b(x) = log_a(x) / log_a(b)' },
              { title: 'تغيير الأساس للحاسبة', type: 'formula', content: 'log_b(x) = ln(x) / ln(b) = log(x) / log(b)' },
              { title: 'تطبيقات الخصائص', type: 'bullets', content: [
                'فك: log(x\u00b2y\u00b3) = 2log(x) + 3log(y)',
                'دمج: 2log(x) + 3log(y) = log(x\u00b2y\u00b3)',
                'تبسيط: log(100) = log(10\u00b2) = 2'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: المعادلات الأسية واللوغاريتمية',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'لحل المعادلات الأسية واللوغاريتمية، نستخدم الخصائص العكسية بينهما: اللوغاريتم يلغي الأس، والأس يلغي اللوغاريتم.',
            sections: [
              { title: 'حل المعادلات الأسية', type: 'bullets', content: [
                '1. اعزل الحد الأسي',
                '2. خذ اللوغاريتم للطرفين (طبيعي أو مشترك)',
                '3. استخدم خاصية القوة لإنزال الأس',
                '4. حل المعادلة الخطية الناتجة'
              ]},
              { title: 'مثال على معادلة أسية', type: 'formula', content: '3\u02e3 = 24 \u21d2 x\u00b7ln(3) = ln(24) \u21d2 x = ln(24)/ln(3) \u2248 2.89' },
              { title: 'حل المعادلات اللوغاريتمية', type: 'bullets', content: [
                '1. اجمع الحدود اللوغاريتمية في طرف واحد',
                '2. استخدم الخصائص لدمج اللوغاريتمات',
                '3. حول إلى صيغة أسية',
                '4. حل المعادلة الناتجة',
                '5. تحقق من الحلول (لا تقبل الحلول السالبة في اللوغاريتم)'
              ]},
              { title: 'مثال على معادلة لوغاريتمية', type: 'formula', content: 'log\u2082(x) + log\u2082(x - 2) = 3 \u21d2 log\u2082(x(x-2)) = 3 \u21d2 x\u00b2 - 2x = 8 \u21d2 x = 4' },
              { title: 'معادلة الفائدة المركبة', type: 'formula', content: 'A = P(1 + r/n)^(nt)' },
              { title: 'الفائدة المركبة المستمرة', type: 'formula', content: 'A = P\u00b7e\u02e3\u1d57' },
              { title: 'زمن مضاعفة الاستثمار', type: 'formula', content: '2P = P\u00b7e\u02e3\u1d57 \u21d2 t = ln(2)/r \u2248 0.693/r' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الانحدار الخطي',
          icon: '📉',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الانحدار الخطي هو أسلوب إحصائي لإيجاد أفضل خط مستقيم يصف العلاقة بين متغيرين. نستخدمه للتنبؤ وفهم العلاقة بين البيانات.',
            sections: [
              { title: 'معادلة خط الانحدار', type: 'formula', content: '\u0177 = a + bx (أو y = mx + b)' },
              { title: 'ميل خط الانحدار', type: 'formula', content: 'b = r\u00b7(s_y / s_x)' },
              { title: 'نقطة التقاطع مع y', type: 'formula', content: 'a = \u0233 - b\u00b7x\u0304' },
              { title: 'معامل الارتباط (r)', type: 'bullets', content: [
                '-1 \u2264 r \u2264 1',
                'r > 0: ارتباط طردي (موجب)',
                'r < 0: ارتباط عكسي (سالب)',
                'r = 0: لا يوجد ارتباط خطي',
                '|r| قريب من 1: ارتباط قوي',
                '|r| قريب من 0: ارتباط ضعيف'
              ]},
              { title: 'معامل التحديد (r\u00b2)', type: 'bullets', content: [
                'r\u00b2 يمثل نسبة التباين في y التي يفسرها خط الانحدار',
                'r\u00b2 = 0.85 يعني 85% من التغير في y يفسره x',
                '0 \u2264 r\u00b2 \u2264 1'
              ]},
              { title: 'القيم المتطرفة والتأثير', type: 'bullets', content: [
                'القيمة المتطرفة (Outlier): نقطة بعيدة عن النمط العام',
                'نقطة مؤثرة (Influential Point): تغير خط الانحدار بشكل كبير عند إزالتها',
                'يجب فحص هذه النقاط قبل الاعتماد على النموذج'
              ]},
              { title: 'التنبؤ', type: 'bullets', content: [
                'الاستكمال (Interpolation): التنبؤ ضمن نطاق البيانات (موثوق)',
                'الاستقراء (Extrapolation): التنبؤ خارج نطاق البيانات (أقل موثوقية)',
                'كلما ابتعدنا عن نطاق البيانات، قلّت دقة التنبؤ'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
