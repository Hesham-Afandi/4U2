import { Curriculum } from '../types';

export const physicsOthersCurriculum: Record<string, Curriculum> = {
  'physics-11-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: Momentum, Impulse & Collisions',
        icon: '💥',
        color: 'from-red-500 to-orange-600',
        description: 'Study of linear momentum, impulse, conservation of momentum, and types of collisions (elastic and inelastic).',
        lessons: [
          {
            id: 1,
            title: 'Part 1: Impulse and Momentum',
            icon: '💥',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Momentum is a physical quantity that describes the motion of objects. Impulse is the change in momentum.',
              sections: [
                { title: 'Momentum Formula', type: 'formula', content: 'p = m × v' },
                { title: 'Impulse-Momentum Theorem', type: 'formula', content: 'J = F × Δt = Δp' }
              ]
            }
          },
          {
            id: 2,
            title: 'Part 2: Conservation of Momentum',
            icon: '⚖️',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The total momentum of a closed and isolated system remains constant.',
              sections: [
                { title: 'Conservation of Momentum', type: 'formula', content: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'" }
              ]
            }
          },
          {
            id: 3,
            title: 'Part 3: Elastic and Inelastic Collisions',
            icon: '🎱',
            duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-1.3-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Perfectly elastic collisions conserve both momentum and kinetic energy, while inelastic collisions do not conserve kinetic energy.',
              sections: [
                { title: 'Conservation of Kinetic Energy', type: 'formula', content: "½m₁v₁² + ½m₂v₂² = ½m₁v₁'² + ½m₂v₂'²" }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Circular Motion',
        icon: '🔄',
        color: 'from-blue-500 to-cyan-600',
        description: 'Study of angular displacement, velocity, acceleration, centripetal force, and circular vs linear motion.',
        lessons: [
          {
            id: 4,
            title: 'Part 1: Angular Velocity, Acceleration & Frequency',
            icon: '🔄',
            duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-2.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-2.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'In circular motion, we use angular quantities to describe motion.',
              sections: [
                { title: 'Angular Velocity', type: 'formula', content: 'ω = Δθ / Δt = 2π / T' }
              ]
            }
          },
          {
            id: 5,
            title: 'Part 2: Centripetal Force & Acceleration',
            icon: '⭕',
            duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-2.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-2.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'In uniform circular motion, centripetal acceleration is directed toward the center.',
              sections: [
                { title: 'Centripetal Acceleration', type: 'formula', content: 'a_c = v² / r = ω²r' },
                { title: 'Centripetal Force', type: 'formula', content: 'F_c = mv² / r = mω²r' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Unit 3: Rotational Motion',
        icon: '🌀',
        color: 'from-purple-500 to-pink-600',
        description: 'Study of rotational kinetic energy, moment of inertia, rotational work, and angular momentum.',
        lessons: [
          {
            id: 6,
            title: 'Part 1: Rotational Kinetic Energy & Moment of Inertia',
            icon: '🌀',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'When a body rotates, it possesses rotational kinetic energy.',
              sections: [
                { title: 'Moment of Inertia', type: 'formula', content: 'I = Σ mᵢrᵢ²' },
                { title: 'Rotational Kinetic Energy', type: 'formula', content: 'KE_rot = ½Iω²' }
              ]
            }
          },
          {
            id: 7,
            title: 'Part 2: Rotational Work',
            icon: '⚡',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The concepts of work and energy extend to rotational motion.',
              sections: [
                { title: 'Rotational Work', type: 'formula', content: 'W = τ × θ' }
              ]
            }
          },
          {
            id: 8,
            title: 'Part 3: Angular Momentum',
            icon: '🔄',
            duration: '65 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Ins-phy-T3-3.3-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Angular momentum is the rotational analog of linear momentum.',
              sections: [
                { title: 'Angular Momentum Formula', type: 'formula', content: 'L = I × ω' },
                { title: 'Conservation of Angular Momentum', type: 'formula', content: 'I₁ω₁ = I₂ω₂' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-11-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: الزخم والدفع والتصادمات',
        icon: '💥',
        color: 'from-red-500 to-orange-600',
        description: 'دراسة الزخم الخطي، الدفع، قانون حفظ كمية الحركة، وأنواع التصادمات.',
        lessons: [
          {
            id: 1,
            title: 'الجزء الأول: الدفع والزخم',
            icon: '💥',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.1-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الزخم هو حاصل ضرب الكتلة في السرعة، والدفع هو التغير في الزخم.',
              sections: [
                { title: 'قانون الزخم', type: 'formula', content: 'p = m × v' },
                { title: 'قانون الدفع-الزخم', type: 'formula', content: 'J = F × Δt = Δp' }
              ]
            }
          },
          {
            id: 2,
            title: 'الجزء الثاني: حفظ كمية الحركة',
            icon: '⚖️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الزخم الكلي لنظام مغلق ومعزول يبقى ثابتاً.',
              sections: [
                { title: 'قانون حفظ الزخم (جسمين)', type: 'formula', content: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'" }
              ]
            }
          },
          {
            id: 3,
            title: 'الجزء الثالث: التصادمات المرنة وغير المرنة',
            icon: '🎱',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-1.3-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تنقسم التصادمات إلى مرنة وغير مرنة بناءً على حفظ الطاقة الحركية.',
              sections: [
                { title: 'سرعة الالتصاق', type: 'formula', content: "v' = (m₁v₁ + m₂v₂) / (m₁ + m₂)" }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: الحركة الدائرية',
        icon: '🔄',
        color: 'from-blue-500 to-cyan-600',
        description: 'دراسة الإزاحة والسرعة والعجلة الزاوية، التردد والدور، والقوة المركزية.',
        lessons: [
          {
            id: 4,
            title: 'الجزء الأول: السرعة والعجلة الزاوية',
            icon: '🔄',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-2.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-2.1-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'في الحركة الدائرية نستخدم كميات زاوية لوصف الحركة بدلاً من الكميات الخطية.',
              sections: [
                { title: 'الخطي والزاوي', type: 'table', headers: ['خطي', 'زاوي', 'العلاقة'], rows: [
                  ['الإزاحة s', 'θ', 's = rθ'],
                  ['السرعة v', 'ω', 'v = rω']
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'الجزء الثاني: القوة والعجلة المركزية',
            icon: '⭕',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-2.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-2.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تنتج العجلة المركزية بسبب التغير المستمر في اتجاه السرعة.',
              sections: [
                { title: 'العجلة المركزية', type: 'formula', content: 'a_c = v²/r = ω²r' },
                { title: 'القوة المركزية', type: 'formula', content: 'F_c = mv²/r = mω²r' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: الدوران المحوري',
        icon: '🌀',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة الطاقة الدورانية، عزم القصور، التدحرج، الشغل الدوراني، وكمية الحركة الزاوية.',
        lessons: [
          {
            id: 6,
            title: 'الجزء الأول: الطاقة الدورانية وعزم القصور',
            icon: '🌀',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.1/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.1-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الجسم الدوار يكتسب طاقة حركية دورانية تعتمد على عزم القصور والسرعة الزاوية.',
              sections: [
                { title: 'عزم القصور الذاتي', type: 'formula', content: 'I = Σ mᵢr²' },
                { title: 'الطاقة الدورانية', type: 'formula', content: 'KE_rot = ½Iω²' }
              ]
            }
          },
          {
            id: 7,
            title: 'الجزء الثاني: الشغل الدوراني',
            icon: '⚡',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.2/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يمتد مفهوم الشغل والطاقة إلى الحركة الدورانية.',
              sections: [
                { title: 'الشغل الدوراني', type: 'formula', content: 'W = τ × θ' }
              ]
            }
          },
          {
            id: 8,
            title: 'الجزء الثالث: كمية الحركة الزاوية',
            icon: '🔄',
            duration: '65 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.3/',
            examUrl: 'https://hesham-afandi.github.io/11Adv-Bri-Ar-phy-T3-3.3-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'كمية الحركة الزاوية هي نظير كمية الحركة الخطية في الدوران.',
              sections: [
                { title: 'قانون الحفظ', type: 'formula', content: 'I₁ω₁ = I₂ω₂' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-10-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الخامسة: الانكسار والعدسات',
        icon: '🔍',
        color: 'from-blue-500 to-cyan-600',
        description: 'دراسة انكسار الضوء، العدسات المحدبة والمقعرة، وتطبيقات العدسات.',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: انكسار الضوء',
            icon: '💡',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'ينكسر الضوء عندما ينتقل من وسط شفاف إلى آخر بسبب تغير سرعته.',
              sections: [
                { title: 'قانون سنيل للانكسار', type: 'formula', content: 'n₁·sin(θ₁) = n₂·sin(θ₂)' },
                { title: 'معامل الانكسار', type: 'formula', content: 'n = c/v' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: العدسات المحدبة والمقعرة',
            icon: '🔍',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'العدسات أدوات بصرية تكسر الضوء لتكوين صور.',
              sections: [
                { title: 'معادلة العدسة الرقيقة', type: 'formula', content: '1/f = 1/dₒ + 1/dᵢ' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: تطبيقات العدسات',
            icon: '🔬',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'العدسات لها تطبيقات عديدة في حياتنا اليومية مثل النظارات والمجاهر.',
              sections: [
                { title: 'المجهر المركب', type: 'bullets', content: [
                  'يتكون من عدستين: شيئية وعينية',
                  'التكبير الكلي = تكبير العدسة الشيئية × تكبير العدسة العينية'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة السادسة: التداخل والحيود',
        icon: '🌈',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة خصائص الموجات الضوئية: التداخل والحيود وتطبيقاتهما.',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: التداخل',
            icon: '〰️',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التداخل ظاهرة موجية تنتج عن تراكب موجات ضوئية من مصادر متسقة.',
              sections: [
                { title: 'التداخل البناء', type: 'formula', content: 'd·sin(θ) = m·λ' },
                { title: 'التداخل الهدام', type: 'formula', content: 'd·sin(θ) = (m + ½)·λ' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: الحيود',
            icon: '🌀',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الحيود هو انحناء الموجات الضوئية حول الحواجز أو الفتحات الضيقة.',
              sections: [
                { title: 'حيود الشق المفرد', type: 'formula', content: 'a·sin(θ) = m·λ' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: السرعة المتجهة النسبية',
            icon: '🚗',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-3.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-3.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'تصف السرعة النسبية حركة جسم بالنسبة لجسم آخر متحرك.',
              sections: [
                { title: 'الحركة في نفس الاتجاه', type: 'bullets', content: [
                  'v_rel = |v₁ - v₂|'
                ]},
                { title: 'الحركة في اتجاهين متعاكسين', type: 'bullets', content: [
                  'v_rel = v₁ + v₂'
                ]}
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-10-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 5: Refraction and Lenses',
        icon: '🔍',
        color: 'from-blue-500 to-cyan-600',
        description: 'Study of light refraction, convex and concave lenses, and practical applications of lenses',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Refraction of Light',
            icon: '💡',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-1.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Light refracts when it passes from one transparent medium to another due to the change in its speed.',
              sections: [
                { title: "Snell's Law of Refraction", type: 'formula', content: 'n₁·sin(θ₁) = n₂·sin(θ₂)' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Convex and Concave Lenses',
            icon: '🔍',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-1.2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Lenses are optical devices that refract light to form images.',
              sections: [
                { title: 'Thin Lens Equation', type: 'formula', content: '1/f = 1/dₒ + 1/dᵢ' }
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Applications of Lenses',
            icon: '🔬',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-1.3/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-1.3-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Lenses have numerous applications in eyeglasses, telescopes, and microscopes.',
              sections: [
                { title: 'The Human Eye', type: 'bullets', content: [
                  'Contains a natural convex lens',
                  'Nearsightedness corrected with concave lens',
                  'Farsightedness corrected with convex lens'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 6: Interference and Diffraction',
        icon: '🌈',
        color: 'from-purple-500 to-pink-600',
        description: 'Study of light wave properties: interference and diffraction and their applications',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Interference',
            icon: '〰️',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-2.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Interference is a wave phenomenon that occurs when two light waves meet at the same point.',
              sections: [
                { title: 'Constructive Interference', type: 'formula', content: 'd·sin(θ) = m·λ' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Diffraction',
            icon: '🌀',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-2.2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-2.2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Diffraction is the bending of waves around obstacles or through narrow openings.',
              sections: [
                { title: 'Single-Slit Diffraction', type: 'formula', content: 'a·sin(θ) = m·λ' }
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Relative Velocity Vector',
            icon: '🚗',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-Phy-T3-3.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-Ar-Phy-T3-3.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Relative velocity describes how the velocity of one object is measured with respect to another.',
              sections: [
                { title: 'Vector Formula', type: 'formula', content: 'v_rel = √(v₁² + v₂² - 2·v₁·v₂·cos θ)' }
              ]
            }
          }
        ]
      }
    ]
  },
  'physics-9-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: Vibrations & Waves',
        icon: '🌊',
        color: 'from-blue-500 to-cyan-600',
        description: 'Study of periodic motion, wave properties, and wave behaviors.',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Periodic Motion',
            icon: '🔄',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.1/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Periodic motion is any motion that repeats itself at regular time intervals.',
              sections: [
                { title: 'Period-Frequency Relationship', type: 'formula', content: 'T = 1/f' },
                { title: 'Simple Pendulum Period', type: 'formula', content: 'T = 2π√(L/g)' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Wave Properties',
            icon: '🌊',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.2/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'A wave is a disturbance that transfers energy through matter or space.',
              sections: [
                { title: 'The Universal Wave Equation', type: 'formula', content: 'v = f × λ' }
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Wave Behavior',
            icon: '🔄',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.3/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-1.3-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'When waves encounter boundaries, they exhibit reflection, refraction, and diffraction.',
              sections: [
                { title: 'Law of Reflection', type: 'formula', content: 'θᵢ = θᵣ' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Sound',
        icon: '🔊',
        color: 'from-orange-500 to-red-600',
        description: 'Study of sound waves, their properties, the Doppler effect, and the physics of music.',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Sound Properties & Doppler Effect',
            icon: '🔊',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-2.1/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-2.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Sound is a longitudinal mechanical wave that propagates through a medium.',
              sections: [
                { title: 'Speed of Sound in Air', type: 'formula', content: 'v = 331 + 0.6·T' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Music & Physics',
            icon: '🎵',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-2.2/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-2.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Musical instruments produce sound through vibrating systems that create standing waves.',
              sections: [
                { title: 'Harmonic Series', type: 'formula', content: 'fₙ = n·f₁' }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Unit 3: Light',
        icon: '💡',
        color: 'from-yellow-500 to-amber-600',
        description: 'Study of illumination, the wave nature of light, and polarization.',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Illumination',
            icon: '💡',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-3.1/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-3.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Illumination describes how light sources transfer luminous energy to surfaces.',
              sections: [
                { title: 'Inverse Square Law of Illumination', type: 'formula', content: 'E = I/d²' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Wave Nature of Light',
            icon: '🌈',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-3.2/',
            examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-Phy-T3-3.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Light exhibits wave properties including interference, diffraction, and polarization.',
              sections: [
                { title: 'Wave Equation for Light', type: 'formula', content: 'c = λ·f' }
              ]
            }
          }
        ]
      }
    ]
  }
};
