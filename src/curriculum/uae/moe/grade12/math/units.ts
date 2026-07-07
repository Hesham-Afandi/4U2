import { Curriculum } from '../../../../../types';

export const math12Curriculum: Record<string, Curriculum> = {
  'math-12-inspire-1': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: Tangents & Limits',
        icon: '📈',
        color: 'from-blue-500 to-indigo-600',
        description: 'Study of tangents and arc length, limit concept and calculation, continuity, limits involving infinity, and formal definition of limits',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Tangents and Arc Length',
            icon: '📐',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.1/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'A tangent is a line that touches a curve at exactly one point. We use limits to find the slope of the tangent at any point on the curve.',
              sections: [
                { title: 'Slope of Tangent', type: 'formula', content: 'm = lim(h→0) [f(x+h) - f(x)]/h' },
                { title: 'Equation of Tangent', type: 'formula', content: 'y - y₁ = m(x - x₁)' },
                { title: 'Arc Length', type: 'formula', content: 'L = ∫√(1 + (dy/dx)²) dx' },
                { title: 'Key Concepts', type: 'bullets', content: [
                  'Tangent touches curve at one point',
                  'Slope of tangent = derivative at that point',
                  'Arc length calculated using integration'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Limit Concept',
            icon: '🎯',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.2/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'A limit describes the behavior of a function as x approaches a certain value, even if the function is not defined at that value.',
              sections: [
                { title: 'Limit Definition', type: 'formula', content: 'lim(x→a) f(x) = L' },
                { title: 'Right-hand Limit', type: 'formula', content: 'lim(x→a⁺) f(x)' },
                { title: 'Left-hand Limit', type: 'formula', content: 'lim(x→a⁻) f(x)' },
                { title: 'Conditions for Limit', type: 'bullets', content: [
                  'Right-hand limit = Left-hand limit',
                  'Limit must be a definite value',
                  'Limit may exist even if function undefined at point'
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Calculating Limits',
            icon: '🔢',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.3/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.3-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'We learn different methods to calculate limits including direct substitution, factoring, and multiplying by conjugate.',
              sections: [
                { title: 'Direct Substitution', type: 'text', content: 'If function is continuous, substitute directly' },
                { title: 'Factoring', type: 'formula', content: 'lim(x→2) (x²-4)/(x-2) = lim(x→2) (x+2) = 4' },
                { title: 'Conjugate Method', type: 'formula', content: 'lim(x→0) (√(x+1)-1)/x × (√(x+1)+1)/(√(x+1)+1)' },
                { title: 'Limit Properties', type: 'bullets', content: [
                  'lim(f ± g) = lim f ± lim g',
                  'lim(f × g) = lim f × lim g',
                  'lim(f/g) = lim f / lim g (if lim g ≠ 0)',
                  'lim(c × f) = c × lim f'
                ]}
              ]
            }
          },
          {
            id: 4,
            title: 'Lesson 4: Continuity and Its Consequences',
            icon: '🔗',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.4-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'A function is continuous at a point if the limit equals the function value. Continuity means no breaks in the curve.',
              sections: [
                { title: 'Continuity Conditions', type: 'formula', content: 'lim(x→a) f(x) = f(a)' },
                { title: 'Types of Discontinuity', type: 'bullets', content: [
                  'Removable discontinuity (hole)',
                  'Infinite discontinuity (vertical asymptote)',
                  'Jump discontinuity (gap in values)'
                ]},
                { title: 'Intermediate Value Theorem', type: 'text', content: 'If f is continuous on [a,b], it takes every value between f(a) and f(b)' },
                { title: 'Properties of Continuous Functions', type: 'bullets', content: [
                  'Sum of continuous = continuous',
                  'Product of continuous = continuous',
                  'Composition of continuous = continuous'
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'Lesson 5: Limits Involving Infinity',
            icon: '∞',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.5/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.5-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'We study function behavior as x approaches infinity or when function approaches infinity, and determine asymptotes.',
              sections: [
                { title: 'Limit at Infinity', type: 'formula', content: 'lim(x→∞) f(x) = L' },
                { title: 'Horizontal Asymptote', type: 'formula', content: 'y = L if lim(x→±∞) f(x) = L' },
                { title: 'Vertical Asymptote', type: 'formula', content: 'x = a if lim(x→a) f(x) = ±∞' },
                { title: 'Calculating Infinite Limits', type: 'bullets', content: [
                  'Divide numerator and denominator by highest power of x',
                  'Use properties: 1/∞ = 0',
                  'Determine highest degree in numerator and denominator'
                ]}
              ]
            }
          },
          {
            id: 6,
            title: 'Lesson 6: Formal Definition of Limit',
            icon: '📋',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.6-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The precise (ε-δ) definition of limit gives a rigorous mathematical description of the concept of approaching.',
              sections: [
                { title: 'ε-δ Definition', type: 'formula', content: 'lim(x→a) f(x) = L if for every ε > 0 there exists δ > 0 such that: if 0 < |x-a| < δ then |f(x)-L| < ε' },
                { title: 'Geometric Meaning', type: 'bullets', content: [
                  'ε represents allowed vertical distance from L',
                  'δ represents allowed horizontal distance from a',
                  'We can make f(x) as close to L as we want by making x close to a'
                ]},
                { title: 'Proving Limits', type: 'text', content: 'We use the definition to prove limits rigorously' }
              ]
            }
          },
          {
            id: 7,
            title: 'Lesson 7: Limits and Function Errors',
            icon: '⚠️',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-1.7/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.7-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'We study special cases where function loses definition and how to handle them using limits.',
              sections: [
                { title: 'Indeterminate Forms', type: 'bullets', content: [
                  '0/0 - most common form',
                  '∞/∞ - needs simplification',
                  '0 × ∞ - needs rearrangement',
                  '∞ - ∞ - needs common denominator'
                ]},
                { title: "L'Hôpital's Rule", type: 'formula', content: "lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x) (for 0/0 or ∞/∞ forms)" },
                { title: 'Handling Errors', type: 'bullets', content: [
                  'Factoring to remove common factor',
                  'Multiplying by conjugate',
                  'Using trigonometric identities',
                  'Algebraic simplification'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Differentiation',
        icon: '∂',
        color: 'from-purple-500 to-pink-600',
        description: 'Study of derivatives, various differentiation rules, implicit differentiation, inverse trigonometric functions, and hyperbolic functions',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Tangents and Velocity Vector',
            icon: '🚀',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.1/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.1-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The derivative represents the slope of the tangent to the curve, and in physics represents instantaneous velocity.',
              sections: [
                { title: 'Average Velocity', type: 'formula', content: 'v_avg = Δs/Δt' },
                { title: 'Instantaneous Velocity', type: 'formula', content: 'v = lim(Δt→0) Δs/Δt = ds/dt' },
                { title: 'Acceleration', type: 'formula', content: 'a = dv/dt = d²s/dt²' },
                { title: 'Applications', type: 'bullets', content: [
                  'Find velocity from position function',
                  'Find acceleration from velocity function',
                  'Analyze object motion'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Differentiation',
            icon: 'd/dx',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.2/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.2-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Differentiation is the process of finding the derivative which represents the instantaneous rate of change.',
              sections: [
                { title: 'Derivative Definition', type: 'formula', content: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h" },
                { title: 'Notation', type: 'bullets', content: [
                  "f'(x) - Lagrange notation",
                  'dy/dx - Leibniz notation',
                  'Dₓf - Operator notation'
                ]},
                { title: 'Geometric Interpretation', type: 'text', content: 'Derivative = slope of tangent to curve at point' },
                { title: 'Physical Interpretation', type: 'text', content: 'Derivative = instantaneous rate of change' }
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Calculating Derivatives (Power Rule)',
            icon: 'xⁿ',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.3/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.3-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The power rule is the simplest and most important rule in differentiation.',
              sections: [
                { title: 'Power Rule', type: 'formula', content: 'd/dx(xⁿ) = n·xⁿ⁻¹' },
                { title: 'Derivative of Constant', type: 'formula', content: 'd/dx(c) = 0' },
                { title: 'Derivative of x', type: 'formula', content: 'd/dx(x) = 1' },
                { title: 'Constant Multiple Rule', type: 'formula', content: "d/dx[c·f(x)] = c·f'(x)" },
                { title: 'Sum Rule', type: 'formula', content: "d/dx[f(x) ± g(x)] = f'(x) ± g'(x)" },
                { title: 'Examples', type: 'bullets', content: [
                  'd/dx(x³) = 3x²',
                  'd/dx(5x⁴) = 20x³',
                  'd/dx(x² + 3x - 5) = 2x + 3'
                ]}
              ]
            }
          },
          {
            id: 4,
            title: 'Lesson 4: Product and Quotient Rules',
            icon: '×÷',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.4-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'When differentiating a product or quotient of two functions, we need special rules.',
              sections: [
                { title: 'Product Rule', type: 'formula', content: "d/dx[f·g] = f'·g + f·g'" },
                { title: 'Quotient Rule', type: 'formula', content: "d/dx[f/g] = (f'·g - f·g')/g²" },
                { title: 'Remember Product Rule', type: 'text', content: '"First times derivative of second plus second times derivative of first"' },
                { title: 'Remember Quotient Rule', type: 'text', content: '"Denominator times derivative of numerator minus numerator times derivative of denominator, all over denominator squared"' },
                { title: 'Examples', type: 'bullets', content: [
                  'd/dx(x²·sin x) = 2x·sin x + x²·cos x',
                  'd/dx(x/cos x) = (cos x + x·sin x)/cos²x'
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'Lesson 5: Chain Rule',
            icon: '⛓️',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.5/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.5-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The chain rule is used to differentiate composite functions (function inside a function).',
              sections: [
                { title: 'Chain Rule', type: 'formula', content: "d/dx[f(g(x))] = f'(g(x))·g'(x)" },
                { title: 'In Notation', type: 'formula', content: 'dy/dx = dy/du · du/dx' },
                { title: 'Method', type: 'bullets', content: [
                  'Identify outer and inner functions',
                  'Differentiate outer function (keeping inner)',
                  'Multiply by derivative of inner function'
                ]},
                { title: 'Examples', type: 'bullets', content: [
                  'd/dx(sin(x²)) = cos(x²)·2x',
                  'd/dx((3x+1)⁵) = 5(3x+1)⁴·3 = 15(3x+1)⁴'
                ]}
              ]
            }
          },
          {
            id: 6,
            title: 'Lesson 6: Derivatives of Trigonometric Functions',
            icon: 'sin/cos',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.6-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Basic trigonometric functions have specific derivative formulas that must be memorized.',
              sections: [
                { title: 'Basic Derivatives', type: 'bullets', content: [
                  'd/dx(sin x) = cos x',
                  'd/dx(cos x) = -sin x',
                  'd/dx(tan x) = sec²x',
                  'd/dx(cot x) = -csc²x',
                  'd/dx(sec x) = sec x·tan x',
                  'd/dx(csc x) = -csc x·cot x'
                ]},
                { title: 'With Chain Rule', type: 'formula', content: 'd/dx(sin u) = cos u · du/dx' },
                { title: 'Note', type: 'text', content: 'Derivatives of cos, cot, and csc have negative signs' }
              ]
            }
          },
          {
            id: 7,
            title: 'Lesson 7: Derivatives of Exponential and Logarithmic Functions',
            icon: 'eˣ/ln x',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.7/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.7-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Exponential and logarithmic functions have unique and important derivatives.',
              sections: [
                { title: 'Exponential Function', type: 'formula', content: 'd/dx(eˣ) = eˣ' },
                { title: 'General Exponential', type: 'formula', content: 'd/dx(aˣ) = aˣ·ln(a)' },
                { title: 'Natural Logarithm', type: 'formula', content: 'd/dx(ln x) = 1/x' },
                { title: 'General Logarithm', type: 'formula', content: 'd/dx(logₐx) = 1/(x·ln a)' },
                { title: 'With Chain Rule', type: 'bullets', content: [
                  'd/dx(eᵘ) = eᵘ · du/dx',
                  'd/dx(ln u) = (1/u) · du/dx'
                ]},
                { title: 'Note', type: 'text', content: 'Derivative of eˣ is e itself - the only function equal to its own derivative!' }
              ]
            }
          },
          {
            id: 8,
            title: 'Lesson 8: Implicit Differentiation and Inverse Trigonometric Functions',
            icon: '↔️',
            duration: '60 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.8/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.8-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Implicit differentiation is used when y cannot be isolated, and inverse trigonometric functions have special derivatives.',
              sections: [
                { title: 'Implicit Differentiation', type: 'bullets', content: [
                  'Differentiate both sides with respect to x',
                  'When differentiating y, multiply by dy/dx',
                  'Collect dy/dx terms on one side',
                  'Solve for dy/dx'
                ]},
                { title: 'Derivatives of Inverse Trig Functions', type: 'bullets', content: [
                  'd/dx(sin⁻¹x) = 1/√(1-x²)',
                  'd/dx(cos⁻¹x) = -1/√(1-x²)',
                  'd/dx(tan⁻¹x) = 1/(1+x²)',
                  'd/dx(cot⁻¹x) = -1/(1+x²)'
                ]},
                { title: 'Implicit Example', type: 'formula', content: 'x² + y² = 25 → 2x + 2y(dy/dx) = 0 → dy/dx = -x/y' }
              ]
            }
          },
          {
            id: 9,
            title: 'Lesson 9: Hyperbolic Functions',
            icon: 'sinh/cosh',
            duration: '50 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.9/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.9-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Hyperbolic functions are similar to trigonometric functions but have different properties.',
              sections: [
                { title: 'Definitions', type: 'bullets', content: [
                  'sinh x = (eˣ - e⁻ˣ)/2',
                  'cosh x = (eˣ + e⁻ˣ)/2',
                  'tanh x = sinh x / cosh x'
                ]},
                { title: 'Derivatives', type: 'bullets', content: [
                  'd/dx(sinh x) = cosh x',
                  'd/dx(cosh x) = sinh x',
                  'd/dx(tanh x) = sech²x'
                ]},
                { title: 'Identities', type: 'bullets', content: [
                  'cosh²x - sinh²x = 1',
                  'sinh(x±y) = sinh x cosh y ± cosh x sinh y',
                  'cosh(x±y) = cosh x cosh y ± sinh x sinh y'
                ]}
              ]
            }
          },
          {
            id: 10,
            title: 'Lesson 10: Mean Value Theorem',
            icon: '📊',
            duration: '55 min',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Ins-math-T1-2.10/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.10-exam/',
            lessonTitle: '📖 Lesson Explanation',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The Mean Value Theorem relates average rate of change to instantaneous rate of change.',
              sections: [
                { title: "Rolle's Theorem", type: 'formula', content: "If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then there exists c in (a,b) where f'(c)=0" },
                { title: 'Mean Value Theorem', type: 'formula', content: "If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) where: f'(c) = [f(b)-f(a)]/(b-a)" },
                { title: 'Geometric Interpretation', type: 'text', content: 'There exists a point where tangent slope equals secant slope' },
                { title: 'Applications', type: 'bullets', content: [
                  'Prove existence of roots',
                  'Analyze function behavior',
                  'Prove inequalities'
                ]}
              ]
            }
          }
        ]
      }
    ]
  },
  'math-12-bridge-1': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: المماسات والنهايات',
        icon: '📈',
        color: 'from-blue-500 to-indigo-600',
        description: 'دراسة المماسات وطول المنحنى، مفهوم النهايات وحسابها، الاتصال، النهايات التي تتضمن اللانهاية، والتعريف الرسمي للنهاية',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: المماسات وطول المنحنى',
            icon: '📐',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.1/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.1-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المحرك (Σ): المماس هو المستقيم الذي يمس المنحنى في نقطة واحدة فقط. نستخدم النهايات لإيجاد ميل المماس عند أي نقطة على المنحنى.',
              sections: [
                { title: 'ميل المماس', type: 'formula', content: 'm = lim(h→0) [f(x+h) - f(x)]/h' },
                { title: 'معادلة المماس', type: 'formula', content: 'y - y₁ = m(x - x₁)' },
                { title: 'طول القوس', type: 'formula', content: 'L = ∫√(1 + (dy/dx)²) dx' },
                { title: 'المفاهيم الأساسية', type: 'bullets', content: [
                  'المماس يمس المنحنى في نقطة واحدة',
                  'ميل المماس = مشتقة الدالة عند النقطة',
                  'طول القوس يُحسب باستخدام التكامل'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: مفهوم النهاية',
            icon: '🎯',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.2/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'النهاية تصف سلوك الدالة عندما تقترب x من قيمة معينة، حتى لو لم تكن الدالة معرفة عند هذه القيمة.',
              sections: [
                { title: 'تعريف النهاية', type: 'formula', content: 'lim(x→a) f(x) = L' },
                { title: 'النهاية من اليمين', type: 'formula', content: 'lim(x→a⁺) f(x)' },
                { title: 'النهاية من اليسار', type: 'formula', content: 'lim(x→a⁻) f(x)' },
                { title: 'شروط وجود النهاية', type: 'bullets', content: [
                  'النهاية من اليمين = النهاية من اليسار',
                  'النهاية يجب أن تكون قيمة محددة',
                  'قد توجد النهاية حتى لو لم تكن الدالة معرفة عند النقطة'
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: حساب النهايات',
            icon: '🔢',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.3/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.3-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نتعلم طرق مختلفة لحساب النهايات بما في ذلك التعويض المباشر، التحليل، والضرب في المرافق.',
              sections: [
                { title: 'التعويض المباشر', type: 'text', content: 'إذا كانت الدالة متصلة، نعوض مباشرة بالقيمة' },
                { title: 'التحليل', type: 'formula', content: 'lim(x→2) (x²-4)/(x-2) = lim(x→2) (x+2) = 4' },
                { title: 'الضرب في المرافق', type: 'formula', content: 'lim(x→0) (√(x+1)-1)/x × (√(x+1)+1)/(√(x+1)+1)' },
                { title: 'خصائص النهايات', type: 'bullets', content: [
                  'lim(f ± g) = lim f ± lim g',
                  'lim(f × g) = lim f × lim g',
                  'lim(f/g) = lim f / lim g (إذا كان lim g ≠ 0)',
                  'lim(c × f) = c × lim f'
                ]}
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس 4: الاتصال ونتائجه',
            icon: '🔗',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.4-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدالة متصلة عند نقطة إذا كانت النهاية عندها تساوي قيمة الدالة. الاتصال يعني عدم وجود انقطاعات في المنحنى.',
              sections: [
                { title: 'شروط الاتصال', type: 'formula', content: 'lim(x→a) f(x) = f(a)' },
                { title: 'أنواع الانقطاع', type: 'bullets', content: [
                  'انقطاع قابل للإزالة (ثقب)',
                  'انقطاع لا نهائي (خط تقارب رأسي)',
                  'انقطاع قفزي (فرق في القيم)'
                ]},
                { title: 'مبرهنة القيمة المتوسطة', type: 'text', content: 'إذا كانت f متصلة على [a,b]، فإنها تأخذ كل قيمة بين f(a) و f(b)' },
                { title: 'خصائص الدوال المتصلة', type: 'bullets', content: [
                  'مجموع دوال متصلة = دالة متصلة',
                  'حاصل ضرب دوال متصلة = دالة متصلة',
                  'مركب دوال متصلة = دالة متصلة'
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس 5: النهايات التي تتضمن اللانهاية',
            icon: '∞',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.5/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.5-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'ندرس سلوك الدوال عندما تؤول x إلى اللانهاية أو عندما تؤول الدالة إلى اللانهاية، ونحدد خطوط التقارب.',
              sections: [
                { title: 'النهاية عند اللانهاية', type: 'formula', content: 'lim(x→∞) f(x) = L' },
                { title: 'خط التقارب الأفقي', type: 'formula', content: 'y = L إذا كانت lim(x→±∞) f(x) = L' },
                { title: 'خط التقارب الرأسي', type: 'formula', content: 'x = a إذا كانت lim(x→a) f(x) = ±∞' },
                { title: 'حساب نهايات اللانهاية', type: 'bullets', content: [
                  'اقسم البسط والمقام على أعلى قوة لـ x',
                  'استخدم خصائص 1/∞ = 0',
                  'حدد الدرجة الأعلى في البسط والمقام'
                ]}
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس 6: التعريف الرسمي للنهاية',
            icon: '📋',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.6-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التعريف الدقيق (ε-δ) للنهاية يعطي وصفاً رياضياً دقيقاً لمفهوم الاقتراب.',
              sections: [
                { title: 'تعريف ε-δ', type: 'formula', content: 'lim(x→a) f(x) = L إذا كان لكل ε > 0 يوجد δ > 0 بحيث: إذا 0 < |x-a| < δ فإن |f(x)-L| < ε' },
                { title: 'المعنى الهندسي', type: 'bullets', content: [
                  'ε تمثل المسافة الرأسية المسموح بها من L',
                  'δ تمثل المسافة الأفقية المسموح بها من a',
                  'يمكن جعل f(x) قريبة من L بقدر نريد بجعل x قريبة من a'
                ]},
                { title: 'إثبات النهايات', type: 'text', content: 'نستخدم التعريف لإثبات صحة النهايات بشكل رياضي دقيق' }
              ]
            }
          },
          {
            id: 7,
            title: 'الدرس 7: النهايات وأخطاء فقدان الدالة',
            icon: '⚠️',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.7/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-1.7-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'ندرس الحالات الخاصة التي تفقد فيها الدالة تعريفها وكيفية التعامل معها باستخدام النهايات.',
              sections: [
                { title: 'الصيغ غير المعينة', type: 'bullets', content: [
                  '0/0 - الصيغة الأكثر شيوعاً',
                  '∞/∞ - تحتاج تبسيط',
                  '0 × ∞ - تحتاج إعادة ترتيب',
                  '∞ - ∞ - تحتاج توحيد مقامات'
                ]},
                { title: 'قاعدة لوبيتال', type: 'formula', content: "lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x) (للصيغ 0/0 أو ∞/∞)" },
                { title: 'التعامل مع الأخطاء', type: 'bullets', content: [
                  'التحليل لإزالة العامل المشترك',
                  'الضرب في المرافق',
                  'استخدام المتطابقات المثلثية',
                  'التبسيط الجبري'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: التفاضل',
        icon: '∂',
        color: 'from-purple-500 to-pink-600',
        description: 'دراسة المشتقات، قواعد الاشتقاق المختلفة، المشتقات الضمنية، الدوال المثلثية المعكوسة، ودوال القطع الزائد',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: المماسات والسرعة المتجهة',
            icon: '🚀',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.1/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.1-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'المشتقة تمثل ميل المماس للمنحنى، وفي الفيزياء تمثل السرعة المتجهة اللحظية.',
              sections: [
                { title: 'السرعة المتجهة المتوسطة', type: 'formula', content: 'v_avg = Δs/Δt' },
                { title: 'السرعة المتجهة اللحظية', type: 'formula', content: 'v = lim(Δt→0) Δs/Δt = ds/dt' },
                { title: 'التسارع', type: 'formula', content: 'a = dv/dt = d²s/dt²' },
                { title: 'التطبيقات', type: 'bullets', content: [
                  'إيجاد السرعة من دالة المسافة',
                  'إيجاد التسارع من دالة السرعة',
                  'تحليل حركة الأجسام'
                ]}
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: الاشتقاق',
            icon: 'd/dx',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.2/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.2-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الاشتقاق هو عملية إيجاد المشتقة التي تمثل معدل التغير اللحظي للدالة.',
              sections: [
                { title: 'تعريف المشتقة', type: 'formula', content: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h" },
                { title: 'الرموز', type: 'bullets', content: [
                  "f'(x) - رمز لاغرانج",
                  'dy/dx - رمز لايبنتز',
                  'Dₓf - رمز المشغل'
                ]},
                { title: 'التفسير الهندسي', type: 'text', content: 'المشتقة = ميل المماس للمنحنى عند النقطة' },
                { title: 'التفسير الفيزيائي', type: 'text', content: 'المشتقة = معدل التغير اللحظي' }
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: حساب المشتقات (قاعدة القوة)',
            icon: 'xⁿ',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.3/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.3-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قاعدة القوة هي أبسط وأهم قاعدة في الاشتقاق.',
              sections: [
                { title: 'قاعدة القوة', type: 'formula', content: 'd/dx(xⁿ) = n·xⁿ⁻¹' },
                { title: 'مشتقة الثابت', type: 'formula', content: 'd/dx(c) = 0' },
                { title: 'مشتقة x', type: 'formula', content: 'd/dx(x) = 1' },
                { title: 'قاعدة المضاعف الثابت', type: 'formula', content: "d/dx[c·f(x)] = c·f'(x)" },
                { title: 'قاعدة المجموع', type: 'formula', content: "d/dx[f(x) ± g(x)] = f'(x) ± g'(x)" },
                { title: 'أمثلة', type: 'bullets', content: [
                  'd/dx(x³) = 3x²',
                  'd/dx(5x⁴) = 20x³',
                  'd/dx(x² + 3x - 5) = 2x + 3'
                ]}
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس 4: قواعد الضرب والقسمة',
            icon: '×÷',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.4/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.4-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'عند اشتقاق حاصل ضرب أو قسمة دالتين، نحتاج قواعد خاصة.',
              sections: [
                { title: 'قاعدة الضرب', type: 'formula', content: "d/dx[f·g] = f'·g + f·g'" },
                { title: 'قاعدة القسمة', type: 'formula', content: "d/dx[f/g] = (f'·g - f·g')/g²" },
                { title: 'تذكر قاعدة الضرب', type: 'text', content: '"الأولى مشتقة الثانية + الثانية مشتقة الأولى"' },
                { title: 'تذكر قاعدة القسمة', type: 'text', content: '"المقام × مشتقة البسط - البسط × مشتقة المقام، الكل على مقام تربيع"' },
                { title: 'أمثلة', type: 'bullets', content: [
                  'd/dx(x²·sin x) = 2x·sin x + x²·cos x',
                  'd/dx(x/cos x) = (cos x + x·sin x)/cos²x'
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس 5: قاعدة السلسلة',
            icon: '⛓️',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.5/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.5-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'قاعدة السلسلة تُستخدم لاشتقاق الدوال المركبة (دالة داخل دالة).',
              sections: [
                { title: 'قاعدة السلسلة', type: 'formula', content: "d/dx[f(g(x))] = f'(g(x))·g'(x)" },
                { title: 'بالرموز', type: 'formula', content: 'dy/dx = dy/du · du/dx' },
                { title: 'الطريقة', type: 'bullets', content: [
                  'حدد الدالة الخارجية والداخلية',
                  'اشتق الدالة الخارجية (مع الإبقاء على الداخلية)',
                  'اضرب في مشتقة الدالة الداخلية'
                ]},
                { title: 'أمثلة', type: 'bullets', content: [
                  'd/dx(sin(x²)) = cos(x²)·2x',
                  'd/dx((3x+1)⁵) = 5(3x+1)⁴·3 = 15(3x+1)⁴'
                ]}
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس 6: مشتقات الدوال المثلثية',
            icon: 'sin/cos',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.6/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.6-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'مشتقات الدوال المثلثية الأساسية لها صيغ محددة يجب حفظها.',
              sections: [
                { title: 'المشتقات الأساسية', type: 'bullets', content: [
                  'd/dx(sin x) = cos x',
                  'd/dx(cos x) = -sin x',
                  'd/dx(tan x) = sec²x',
                  'd/dx(cot x) = -csc²x',
                  'd/dx(sec x) = sec x·tan x',
                  'd/dx(csc x) = -csc x·cot x'
                ]},
                { title: 'مع قاعدة السلسلة', type: 'formula', content: 'd/dx(sin u) = cos u · du/dx' },
                { title: 'ملاحظة', type: 'text', content: 'مشتقات cos و cot و csc تحمل إشارة سالبة' }
              ]
            }
          },
          {
            id: 7,
            title: 'الدرس 7: اشتقاق الدوال الأسية واللوغاريتمية',
            icon: 'eˣ/ln x',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.7/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.7-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدوال الأسية واللوغاريتمية لها مشتقات فريدة ومهمة.',
              sections: [
                { title: 'الدالة الأسية', type: 'formula', content: 'd/dx(eˣ) = eˣ' },
                { title: 'الدالة الأسية العامة', type: 'formula', content: 'd/dx(aˣ) = aˣ·ln(a)' },
                { title: 'اللوغاريتم الطبيعي', type: 'formula', content: 'd/dx(ln x) = 1/x' },
                { title: 'اللوغاريتم العام', type: 'formula', content: 'd/dx(logₐx) = 1/(x·ln a)' },
                { title: 'مع قاعدة السلسلة', type: 'bullets', content: [
                  'd/dx(eᵘ) = eᵘ · du/dx',
                  'd/dx(ln u) = (1/u) · du/dx'
                ]},
                { title: 'ملاحظة', type: 'text', content: 'مشتقة eˣ هي eˣ نفسها - الدالة الوحيدة التي تساوي مشتقتها!' }
              ]
            }
          },
          {
            id: 8,
            title: 'الدرس 8: الاشتقاق الضمني والدوال المثلثية المعكوسة',
            icon: '↔️',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.8/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.8-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الاشتقاق الضمني يُستخدم عندما لا يمكن عزل y، والدوال المثلثية المعكوسة لها مشتقات خاصة.',
              sections: [
                { title: 'الاشتقاق الضمني', type: 'bullets', content: [
                  'اشتق كلا الطرفين بالنسبة لـ x',
                  'عند اشتقاق y، اضرب في dy/dx',
                  'اجمع حدود dy/dx في طرف',
                  'حل لإيجاد dy/dx'
                ]},
                { title: 'مشتقات الدوال المثلثية المعكوسة', type: 'bullets', content: [
                  'd/dx(sin⁻¹x) = 1/√(1-x²)',
                  'd/dx(cos⁻¹x) = -1/√(1-x²)',
                  'd/dx(tan⁻¹x) = 1/(1+x²)',
                  'd/dx(cot⁻¹x) = -1/(1+x²)'
                ]},
                { title: 'مثال ضمني', type: 'formula', content: 'x² + y² = 25 → 2x + 2y(dy/dx) = 0 → dy/dx = -x/y' }
              ]
            }
          },
          {
            id: 9,
            title: 'الدرس 9: دوال القطع الزائد',
            icon: 'sinh/cosh',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.9/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.9-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'دوال القطع الزائد (Hyperbolic Functions) تشبه الدوال المثلثية ولكن لها خصائص مختلفة.',
              sections: [
                { title: 'التعريفات', type: 'bullets', content: [
                  'sinh x = (eˣ - e⁻ˣ)/2',
                  'cosh x = (eˣ + e⁻ˣ)/2',
                  'tanh x = sinh x / cosh x'
                ]},
                { title: 'المشتقات', type: 'bullets', content: [
                  'd/dx(sinh x) = cosh x',
                  'd/dx(cosh x) = sinh x',
                  'd/dx(tanh x) = sech²x'
                ]},
                { title: 'المتطابقات', type: 'bullets', content: [
                  'cosh²x - sinh²x = 1',
                  'sinh(x±y) = sinh x cosh y ± cosh x sinh y',
                  'cosh(x±y) = cosh x cosh y ± sinh x sinh y'
                ]}
              ]
            }
          },
          {
            id: 10,
            title: 'الدرس 10: نظرية القيمة المتوسطة',
            icon: '📊',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.10/',
            examUrl: 'https://hesham-afandi.github.io/12Adv-Bri-math-T1-2.10-exam/',
            lessonTitle: '📖 شرح الدرس',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'نظرية القيمة المتوسطة تربط بين متوسط معدل التغير ومعدل التغير اللحظي.',
              sections: [
                { title: 'نظرية رول', type: 'formula', content: "إذا كانت f متصلة على [a,b]، قابلة للاشتقاق على (a,b)، و f(a)=f(b)، فإن هناك c في (a,b) حيث f'(c)=0" },
                { title: 'نظرية القيمة المتوسطة', type: 'formula', content: "إذا كانت f متصلة على [a,b] وقابلة للاشتقاق على (a,b)، فإن هناك c في (a,b) حيث: f'(c) = [f(b)-f(a)]/(b-a)" },
                { title: 'التفسير الهندسي', type: 'text', content: 'يوجد نقطة يكون عندها ميل المماس مساوياً لميل القاطع' },
                { title: 'التطبيقات', type: 'bullets', content: [
                  'إثبات وجود جذور',
                  'تحليل سلوك الدوال',
                  'إثبات المتباينات'
                ]}
              ]
            }
          }
        ]
      }
    ]
  },
  'math-12-inspire-3': {
    isEnglish: true,
    units: [
      {
        id: 1,
        name: 'Unit 1: Integration',
        icon: 'Σ',
        color: 'from-blue-500 to-indigo-600',
        description: 'The architectural blueprints of calculus - automating massive repetitive additions',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Antiderivatives',
            icon: 'Σ',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Brute-force addition is no longer possible for thousands of terms. We need a machine to automate summation. Sigma notation is the engine that powers this automation.',
              sections: [
                { title: 'The Four Components of Sigma', type: 'bullets', content: [
                  'The Engine (Σ): Represents the command to add all generated terms together',
                  'The Brake (Upper Limit n): The exact point where the machine stops generating new terms',
                  'The Ignition (Starting Index i=1): Tells the machine exactly where the sequence begins',
                  'The Fuel (Formula): The mathematical expression into which each value of i is substituted'
                ]},
                { title: 'Key Insight', type: 'text', content: 'The dummy variable i acts purely as a placeholder to generate the sequence, drastically reducing the notation required.' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Sums and Sigma Notation',
            icon: '🧠',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'At age 10, Carl Friedrich Gauss was tasked with adding all numbers from 1 to 100. Rather than brute-force counting, he invented a visual shortcut.',
              sections: [
                { title: 'The Gauss Formula', type: 'formula', content: 'Σi = n(n+1)/2' },
                { title: 'The Summation Toolkit', type: 'table', headers: ['Rule Name', 'Mathematical Blueprint'], rows: [
                  ['Sum of a Constant', 'ΣC = Cn'],
                  ['Sum of First n Integers', 'Σi = n(n+1)/2'],
                  ['Sum of Squares', 'Σi² = n(n+1)(2n+1)/6'],
                  ['Sum of Cubes', 'Σi³ = [n(n+1)/2]²']
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Area',
            icon: '⚖️',
            duration: '45 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.3/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.3-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'We never need to calculate complex expressions directly. We dismantle them until they match our basic Toolkit.',
              sections: [
                { title: 'The Splitting Rule', type: 'formula', content: 'Σ(aᵢ + bᵢ) = Σaᵢ + Σbᵢ' },
                { title: 'The Extraction Rule', type: 'formula', content: 'Σ(c·aᵢ) = c·Σaᵢ' },
                { title: 'Core Principle', type: 'text', content: 'Constants (c and d) act as multipliers. They can be safely pulled entirely outside the Sigma engine without altering the mathematics.' }
              ]
            }
          },
          {
            id: 4,
            title: 'Lesson 4: The Definite Integral',
            icon: 'ƒ',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.4/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.4-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'We have successfully automated the calculation of distinct geometric data points simultaneously.',
              sections: [
                { title: 'Phase 1: Define the Interval', type: 'bullets', content: ['Identify the range of values', 'Determine the number of steps (n)', 'Calculate the interval multiplier'] },
                { title: 'Phase 2: Construct the Blueprint', type: 'text', content: 'Substitute x = (interval·i) into the function and write the complete Sigma blueprint.' },
                { title: 'Phase 3: Execute the Machinery', type: 'text', content: 'Extract constants, apply Gauss formulas, and solve using standard arithmetic.' }
              ]
            }
          },
          {
            id: 5,
            title: 'Lesson 5: The Fundamental Theorem of Calculus',
            icon: '🎯',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.5/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.5-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'How do we prove a formula works for infinite cases without checking them all manually? We use the domino effect.',
              sections: [
                { title: 'The Three Phases of Induction', type: 'bullets', content: [
                  'Phase 1 - Base Case (n=1): Proving the statement is true for the first specific value',
                  'Phase 2 - Inductive Hypothesis (n=k): Assuming the formula works for an arbitrary point k',
                  'Phase 3 - Inductive Step (n=k+1): Proving that if k falls, it mathematically forces k+1 to fall'
                ]},
                { title: 'Key Insight', type: 'text', content: 'This guarantees the chain reaction never stops. The formula is mathematically proven for all positive integers!' }
              ]
            }
          },
          {
            id: 6,
            title: 'Lesson 6: Integration by Substitution',
            icon: 'Σ',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.6/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.6-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Integration by substitution is the reverse of the Chain Rule. It allows us to integrate complex composite functions by identifying a hidden inner function.',
              sections: [
                { title: 'The 5-Step Substitution Engine', type: 'bullets', content: [
                  'Step 1: Choose the deep/inner expression as u',
                  'Step 2: Differentiate to find du/dx and solve for du',
                  'Step 3: Substitute all x terms entirely with u and du',
                  'Step 4: Integrate the newly simplified integral with respect to u',
                  'Step 5: Substitute the original x-expression back in place of u'
                ]},
                { title: 'Key Insight', type: 'text', content: 'If differentiation uses the Chain Rule to multiply by the inner derivative, integration must find and absorb that derivative to rebuild the original function.' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Unit 2: Applications of the Definite Integral',
        icon: '∫',
        color: 'from-purple-500 to-pink-600',
        description: 'Reversing the mathematics of change - reconstructing position from acceleration',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Area Between Curves',
            icon: '🔄',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'The Space Shuttle returns to Earth as a 100-ton glider. We know its acceleration is -9.8 m/s², but how do we reverse-engineer the math to find its exact position at any given second?',
              sections: [
                { title: 'Forward vs Reverse Operations', type: 'table', headers: ['Operation', 'Purpose', 'Mathematical Action'], rows: [
                  ['Differentiation (Forward)', 'Extracting rates of change', 'f(x) → f\'(x)'],
                  ['Antidifferentiation (Reverse)', 'Reconstructing the original state', 'f\'(x) → F(x)']
                ]},
                { title: 'The Critical Insight', type: 'text', content: 'If we take a function f(x), we must find a new function F(x) such that F\'(x) = f(x). This is the Antiderivative.' }
              ]
            }
          },
          {
            id: 2,
            title: 'Volume: Slicing, Disks and Washers',
            icon: '🌌',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Acceleration tells you how you are changing, not where you started. The +C represents an infinite "multiverse" of parallel trajectories.',
              sections: [
                { title: 'Theorem 1.1', type: 'text', content: 'If F and G are both antiderivatives of f on an interval, then G(x) = F(x) + C for some constant C.' },
                { title: 'The Physical Truth', type: 'text', content: 'The +C represents an infinite multiverse of parallel trajectories (vertical shifts). They all share the exact same rate of change.' },
                { title: 'Anatomy of the Integral', type: 'bullets', content: [
                  '∫ The Integral Sign: Historically an elongated \'S\', indicating a continuous sum',
                  'f(x) The Integrand: The rate of change we are starting with',
                  'dx Variable of Integration: Which variable we are integrating with respect to',
                  '+C Constant of Integration: The unknown starting parameter'
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'Volumes by Cylindrical Shells',
            icon: '⚡',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.3/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.3-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'To integrate xⁿ, add 1 to the power, then divide by the new power. But there\'s a glaring hole in the number line.',
              sections: [
                { title: 'The Power Rule', type: 'formula', content: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ -1)' },
                { title: 'The Gap at n = -1', type: 'text', content: 'If n = -1, the formula results in 1/0. The Power Rule shatters.' },
                { title: 'The Bridge: Natural Logarithm', type: 'formula', content: '∫(1/x) dx = ln|x| + C' }
              ]
            }
          },
          {
            id: 4,
            title: 'Lesson 4: Arc Length and Surface Area',
            icon: '📖',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.4/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.4-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'A comprehensive toolkit of inverse relationships between derivatives and integrals.',
              sections: [
                { title: 'Trigonometric Reversals', type: 'table', headers: ['Forward (Derivative)', 'Reverse (Integral)'], rows: [
                  ['d/dx(sin x) = cos x', '∫cos x dx = sin x + C'],
                  ['d/dx(cos x) = -sin x', '∫sin x dx = -cos x + C'],
                  ['d/dx(tan x) = sec²x', '∫sec²x dx = tan x + C']
                ]},
                { title: 'Exponential & Inverse Trig', type: 'table', headers: ['Forward (Derivative)', 'Reverse (Integral)'], rows: [
                  ['d/dx(e\u1d69) = e\u1d69', '\u222be\u1d69 dx = e\u1d69 + C'],
                  ['d/dx(sin\u207b\u00b9x) = 1/\u221a(1-x\u00b2)', '\u222b1/\u221a(1-x\u00b2) dx = sin\u207b\u00b9x + C'],
                  ['d/dx(tan\u207b\u00b9x) = 1/(1+x\u00b2)', '\u222b1/(1+x\u00b2) dx = tan\u207b\u00b9x + C']
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'Lesson 5: Projectile Motion',
            icon: '🔗',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.5/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.5-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Recognizing structural linearity allows us to dismantle complex integrals into manageable pieces.',
              sections: [
                { title: 'Theorem 1.3: Linearity', type: 'formula', content: '∫[a·f(x) + b·g(x)] dx = a∫f(x)dx + b∫g(x)dx' },
                { title: 'Theorem 1.4: Reverse Chain Rule', type: 'formula', content: "∫f'(x)/f(x) dx = ln|f(x)| + C" },
                { title: 'Example: Exact Match', type: 'text', content: '∫(sec²x / tan x) dx - Notice the top is the exact derivative of the bottom. The structure instantly collapses to: ln|tan x| + C' }
              ]
            }
          },
          {
            id: 6,
            title: 'Lesson 6: Applications of Integration to Physics and Engineering',
            icon: '🎯',
            duration: '65 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.6/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.6-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Integration is not just abstract mathematics - it has powerful real-world applications in physics, engineering, and economics.',
              sections: [
                { title: 'Area Between Curves', type: 'text', content: 'The definite integral can calculate the exact area enclosed between two curves by integrating the difference of their functions.' },
                { title: 'Volume of Revolution', type: 'text', content: 'By rotating a curve around an axis, we can use integration to find the volume of the resulting 3D solid using the disk or shell method.' },
                { title: 'Physical Applications', type: 'bullets', content: [
                  'Work done by a variable force',
                  'Center of mass and centroid calculations',
                  'Fluid pressure and force on surfaces',
                  'Arc length of curves'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Unit 3: Integration Techniques',
        icon: '∫ᵇₐ',
        color: 'from-emerald-500 to-teal-600',
        description: 'The grand unification of areas - from Riemann sums to exact truth',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Review of Formulas and Techniques',
            icon: '∞',
            duration: '55 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.1/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.1-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: "The Greek Σ and the stretched S of the integral both signify a 'Sum'. The concept remains identical; only the resolution changes.",
              sections: [
                { title: 'The Limit as n → ∞', type: 'formula', content: 'lim(n→∞) Σf(cᵢ)Δx = ∫ₐᵇ f(x)dx' },
                { title: 'The Transformation', type: 'bullets', content: [
                  'The discrete step Δx shrinks into the continuous, infinitely small differential dx',
                  'The finite partition\'s geometric error drops to exactly zero',
                  'The approximation becomes absolute truth'
                ]},
                { title: 'The Rosetta Stone of Calculus', type: 'text', content: 'The Definite Integral is simply the ultimate shorthand for an infinite Riemann construction.' }
              ]
            }
          },
          {
            id: 2,
            title: 'Lesson 2: Integration by Parts',
            icon: '📊',
            duration: '50 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.2/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.2-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: 'Functions above the x-axis yield positive integral values. Functions below yield negative values.',
              sections: [
                { title: 'Signed Area (Net Position)', type: 'text', content: '∫₀³π sin(t) dt = +2 + (-1) = +1 (Final Position)' },
                { title: 'Total Area (Total Distance)', type: 'text', content: '∫₀³π |sin(t)| dt = +2 + |+1| = 3 units (Total Distance)' },
                { title: 'Algebraic Rules Cheat Sheet', type: 'table', headers: ['Rule', 'Formula', 'Translation'], rows: [
                  ['Reversing Limits', '∫ᵇₐf(x)dx = -∫ᵃᵇf(x)dx', 'Integrating backwards flips the sign'],
                  ['Zero Width', '∫ᵃᵃf(x)dx = 0', 'A line has no thickness'],
                  ['Constant Multiple', '∫c·f(x)dx = c·∫f(x)dx', 'Scalars can be factored out'],
                  ['Sum of Functions', '∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx', 'Combined areas']
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'Lesson 3: Trigonometric Techniques of Integration',
            icon: '🏆',
            duration: '65 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.3/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.3-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: "The breakthrough: bypassing infinite addition by finding the function's mathematical origin.",
              sections: [
                { title: 'The Evaluation Theorem', type: 'formula', content: '∫ₐᵇ f(x)dx = F(b) - F(a)' },
                { title: 'The Components', type: 'bullets', content: [
                  'F(b) - The End State: The value of the antiderivative at the upper bound',
                  'F(a) - The Start State: The value of the antiderivative at the lower bound',
                  'The Accumulator: Calculates the total net area under the curve between bounds a and b'
                ]},
                { title: 'Key Insight', type: 'text', content: 'To evaluate a definite integral, simply find the antiderivative and subtract the start state from the end state. No infinite rectangle limits required.' }
              ]
            }
          },
          {
            id: 4,
            title: 'Lesson 4: Integration of Rational Functions Using Partial Fractions',
            icon: '🔄',
            duration: '60 minutes',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.4/',
            lessonTitle: '📖 Lesson Explanation',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.4-exam/',
            examTitle: '📝 Take the Quiz',
            content: {
              intro: "What if the upper limit of an integral is a variable? The definite integral is no longer a static number - it's an Area Function.",
              sections: [
                { title: 'The Revelation', type: 'formula', content: 'd/dx ∫ₐˣ f(t)dt = f(x)' },
                { title: 'The Components', type: 'bullets', content: [
                  'The Outer Operation: The rate of change (derivative) of...',
                  'The Accumulator: ...an expanding area function...',
                  'The Result: ...equals the exact height of the original curve at that boundary point'
                ]},
                { title: 'Key Insight', type: 'text', content: 'Differentiating an integral simply returns the original function. Every continuous function has a readily available antiderivative.' }
              ]
            }
          }
        ]
      }
    ]
  },
  'math-12-bridge-3': {
    isEnglish: false,
    units: [
      {
        id: 1,
        name: 'الوحدة الأولى: التكامل',
        icon: 'Σ',
        color: 'from-blue-500 to-indigo-600',
        description: 'المخططات المعمارية للتفاضل والتكامل - أتمتة عمليات الجمع المتكررة الضخمة',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: المشتقات العكسية',
            icon: 'Σ',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'لم يعد الجمع بالقوة ممكناً لآلاف الحدود. نحتاج إلى آلة لأتمتة عملية الجمع. رمز سيجما هو المحرك الذي يشغل هذه الأتمتة.',
              sections: [
                { title: 'المكونات الأربعة لسيجما', type: 'bullets', content: [
                  'المحرك (Σ): يمثل الأمر بجمع كل الحدود المُولَّدة معاً',
                  'الفرامل (الحد العلوي n): النقطة التي يتوقف عندها المحرك عن توليد حدود جديدة',
                  'الشرارة (فهرس البداية i=1): تخبر المحرك أين يبدأ التسلسل بالضبط',
                  'الوقود (الصيغة): التعبير الرياضي الذي تُعوّض فيه كل قيمة لـ i'
                ]},
                { title: 'الفكرة الأساسية', type: 'text', content: 'المتغير الوهمي i يعمل فقط كعنصر نائب لتوليد التسلسل، مما يقلل بشكل كبير من التدوين المطلوب.' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: المجاميع ورمز سيجما',
            icon: '🧠',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'في سن العاشرة، كُلِّف كارل فريدريش غاوس بجمع كل الأعداد من 1 إلى 100. بدلاً من العد بالقوة، اخترع اختصاراً بصرياً.',
              sections: [
                { title: 'صيغة غاوس', type: 'formula', content: 'Σi = n(n+1)/2' },
                { title: 'مجموعة أدوات الجمع', type: 'table', headers: ['اسم القاعدة', 'الصيغة الرياضية'], rows: [
                  ['مجموع الثابت', 'ΣC = Cn'],
                  ['مجموع أول n عدد صحيح', 'Σi = n(n+1)/2'],
                  ['مجموع المربعات', 'Σi² = n(n+1)(2n+1)/6'],
                  ['مجموع المكعبات', 'Σi³ = [n(n+1)/2]²']
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: المساحة',
            icon: '⚖️',
            duration: '45 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'لا نحتاج أبداً إلى حساب التعابير المعقدة مباشرة. نقوم بتفكيكها حتى تتطابق مع مجموعة أدواتنا الأساسية.',
              sections: [
                { title: 'قاعدة التقسيم', type: 'formula', content: 'Σ(a\u1d62 + b\u1d62) = \u03a3a\u1d62 + \u03a3b\u1d62' },
                { title: 'قاعدة الاستخراج', type: 'formula', content: '\u03a3(c\u00b7a\u1d62) = c\u00b7\u03a3a\u1d62' },
                { title: 'المبدأ الأساسي', type: 'text', content: 'الثوابت (c و d) تعمل كمضاعفات. يمكن سحبها بأمان إلى خارج محرك سيجما بالكامل دون تغيير الرياضيات.' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس 4: التكامل المحدود',
            icon: 'ƒ',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'لقد نجحنا في أتمتة حساب نقاط بيانات هندسية متميزة في وقت واحد.',
              sections: [
                { title: 'المرحلة 1: تحديد الفترة', type: 'bullets', content: ['تحديد نطاق القيم', 'تحديد عدد الخطوات (n)', 'حساب مضاعف الفترة'] },
                { title: 'المرحلة 2: بناء المخطط', type: 'text', content: 'عوّض x = (الفترة·i) في الدالة واكتب مخطط سيجما الكامل.' },
                { title: 'المرحلة 3: تشغيل الآلة', type: 'text', content: 'استخرج الثوابت، طبق صيغ غاوس، واحل باستخدام الحساب القياسي.' }
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس 5: النظرية الأساسية للتفاضل والتكامل',
            icon: '🎯',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'كيف نثبت أن الصيغة تعمل لحالات لا نهائية دون فحصها جميعاً يدوياً؟ نستخدم تأثير الدومينو.',
              sections: [
                { title: 'المراحل الثلاث للاستقراء', type: 'bullets', content: [
                  'المرحلة 1 - الحالة الأساسية (n=1): إثبات صحة العبارة لأول قيمة محددة',
                  'المرحلة 2 - الفرضية الاستقرائية (n=k): افتراض أن الصيغة تعمل عند نقطة اعتباطية k',
                  'المرحلة 3 - الخطوة الاستقرائية (n=k+1): إثبات أنه إذا سقط k، فإنه يجبر k+1 على السقوط رياضياً'
                ]},
                { title: 'الفكرة الأساسية', type: 'text', content: 'هذا يضمن أن سلسلة التفاعل لا تتوقف أبداً. الصيغة مثبتة رياضياً لجميع الأعداد الصحيحة الموجبة!' }
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس 6: التكامل بالتعويض',
            icon: 'Σ',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.6/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-5.6-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التكامل بالتعويض هو عكس قاعدة السلسلة. يسمح لنا بتكامل الدوال المركبة المعقدة من خلال تحديد دالة داخلية مخفية.',
              sections: [
                { title: 'محرك التعويض من 5 خطوات', type: 'bullets', content: [
                  'الخطوة 1: اختر التعبير العميق/الداخلي كـ u',
                  'الخطوة 2: اشتق لإيجاد du/dx وحل لإيجاد du',
                  'الخطوة 3: عوّض جميع حدود x بالكامل بـ u و du',
                  'الخطوة 4: كامل التكامل المبسط بالنسبة لـ u',
                  'الخطوة 5: عوّض تعبير x الأصلي مكان u'
                ]},
                { title: 'الفكرة الأساسية', type: 'text', content: 'إذا كان التفاضل يستخدم قاعدة السلسلة للضرب في المشتقة الداخلية، فلا بد أن يجد التكامل تلك المشتقة ويمتصها لإعادة بناء الدالة الأصلية.' }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        name: 'الوحدة الثانية: تطبيقات التكامل المحدود',
        icon: '∫',
        color: 'from-purple-500 to-pink-600',
        description: 'عكس رياضيات التغير - إعادة بناء الموضع من العجلة',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: المساحة بين المنحنيات',
            icon: '🔄',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'يعود مكوك الفضاء إلى الأرض كطائرة شراعية تزن 100 طن. نعلم أن عجلته -9.8 m/s²، ولكن كيف نعكس هندسة الرياضيات لإيجاد موضعه الدقيق في أي ثانية معينة؟',
              sections: [
                { title: 'العمليات الأمامية والعكسية', type: 'table', headers: ['العملية', 'الغرض', 'الإجراء الرياضي'], rows: [
                  ['التفاضل (أمامي)', 'استخراج معدلات التغير', 'f(x) → f\'(x)'],
                  ['مكافحة التفاضل (عكسي)', 'إعادة بناء الحالة الأصلية', 'f\'(x) → F(x)']
                ]},
                { title: 'الفكرة الجوهرية', type: 'text', content: 'إذا أخذنا دالة f(x)، يجب أن نجد دالة جديدة F(x) بحيث F\'(x) = f(x). هذه هي المشتقة العكسية.' }
              ]
            }
          },
          {
            id: 2,
            title: 'الحجم: الشرائح والأقراص والغسالات',
            icon: '🌌',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'العجلة تخبرك كيف تتغير، وليس من أين بدأت. الـ +C يمثل "أكواناً متوازية" لا نهائية من المسارات.',
              sections: [
                { title: 'النظرية 1.1', type: 'text', content: 'إذا كانت F و G كلاهما مشتقتين عكسييتين لـ f على فترة ما، فإن G(x) = F(x) + C لثابت ما C.' },
                { title: 'الحقيقة الفيزيائية', type: 'text', content: 'الـ +C يمثل أكواناً متوازية لا نهائية من المسارات (إزاحات رأسية). جميعها تشترك في نفس معدل التغير تماماً.' },
                { title: 'تشريح التكامل', type: 'bullets', content: [
                  '∫ علامة التكامل: تاريخياً S مطولة، تشير إلى مجموع مستمر',
                  'f(x) الدالة المُكَمَّلة: معدل التغير الذي نبدأ به',
                  'dx متغير التكامل: المتغير الذي نكامل بالنسبة له',
                  '+C ثابت التكامل: معامل البداية المجهول'
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'الأحجام بالقشور الأسطوانية',
            icon: '⚡',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'لتكامل xⁿ، أضف 1 إلى الأس، ثم اقسم على القوة الجديدة. ولكن هناك ثغرة واضحة في خط الأعداد.',
              sections: [
                { title: 'قاعدة القوة', type: 'formula', content: '∫xⁿ dx = x\u207f\u207a¹/(n+1) + C (عندما n ≠ -1)' },
                { title: 'الثغرة عند n = -1', type: 'text', content: 'إذا كانت n = -1، فإن الصيغة تؤدي إلى 1/0. قاعدة القوة تتحطم.' },
                { title: 'الجسر: اللوغاريتم الطبيعي', type: 'formula', content: '∫(1/x) dx = ln|x| + C' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس 4: طول القوس ومساحة السطح',
            icon: '📖',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'مجموعة أدوات شاملة من العلاقات العكسية بين المشتقات والتكاملات.',
              sections: [
                { title: 'العكوسات المثلثية', type: 'table', headers: ['أماماً (مشتقة)', 'عكساً (تكامل)'], rows: [
                  ['d/dx(sin x) = cos x', '∫cos x dx = sin x + C'],
                  ['d/dx(cos x) = -sin x', '∫sin x dx = -cos x + C'],
                  ['d/dx(tan x) = sec²x', '∫sec²x dx = tan x + C']
                ]},
                { title: 'الأسي والمثلثي العكسي', type: 'table', headers: ['أماماً (مشتقة)', 'عكساً (تكامل)'], rows: [
                  ['d/dx(eˣ) = eˣ', '∫e\u1d69 dx = e\u1d69 + C'],
                  ['d/dx(sin⁻¹x) = 1/√(1-x²)', '∫1/\u221a(1-x\u00b2) dx = sin\u207b\u00b9x + C'],
                  ['d/dx(tan⁻¹x) = 1/(1+x²)', '∫1/(1+x\u00b2) dx = tan\u207b\u00b9x + C']
                ]}
              ]
            }
          },
          {
            id: 5,
            title: 'الدرس 5: حركة القذائف',
            icon: '🔗',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.5/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.5-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التعرف على الخطية الهيكلية يسمح لنا بتفكيك التكاملات المعقدة إلى أجزاء يمكن إدارتها.',
              sections: [
                { title: 'النظرية 1.3: الخطية', type: 'formula', content: '∫[a·f(x) + b·g(x)] dx = a∫f(x)dx + b∫g(x)dx' },
                { title: 'النظرية 1.4: قاعدة السلسلة العكسية', type: 'formula', content: "∫f'(x)/f(x) dx = ln|f(x)| + C" },
                { title: 'مثال: التطابق التام', type: 'text', content: '∫(sec²x / tan x) dx - لاحظ أن البسط هو المشتقة الدقيقة للمقام. الهيكل ينهار فوراً إلى: ln|tan x| + C' }
              ]
            }
          },
          {
            id: 6,
            title: 'الدرس 6: تطبيقات التكامل في الفيزياء والهندسة',
            icon: '🎯',
            duration: '65 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.6/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-6.6-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'التكامل ليس مجرد رياضيات مجردة - بل له تطبيقات قوية في العالم الحقيقي في الفيزياء والهندسة والاقتصاد.',
              sections: [
                { title: 'المساحة بين المنحنيات', type: 'text', content: 'يمكن للتكامل المحدد حساب المساحة الدقيقة المحصورة بين منحنيين عن طريق تكامل الفرق بين دالتيهما.' },
                { title: 'حجم الدوران', type: 'text', content: 'بتدوير منحنى حول محور، يمكننا استخدام التكامل لإيجاد حجم الجسم الصلب ثلاثي الأبعاد الناتج باستخدام طريقة القرص أو القشرة.' },
                { title: 'التطبيقات الفيزيائية', type: 'bullets', content: [
                  'الشغل المبذول بواسطة قوة متغيرة',
                  'حسابات مركز الكتلة والمركز الهندسي',
                  'ضغط الموائع والقوة على الأسطح',
                  'طول قوس المنحنيات'
                ]}
              ]
            }
          }
        ]
      },
      {
        id: 3,
        name: 'الوحدة الثالثة: تقنيات التكامل',
        icon: '∫ᵇₐ',
        color: 'from-emerald-500 to-teal-600',
        description: 'التوحيد العظيم للمساحات - من مجاميع ريمان إلى الحقيقة الدقيقة',
        lessons: [
          {
            id: 1,
            title: 'الدرس 1: مراجعة الصيغ والتقنيات',
            icon: '∞',
            duration: '55 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.1/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.1-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: "كلا من Σ اليونانية و S الممدودة للتكامل تعني 'مجموع'. المفهوم يبقى مطابقاً؛ فقط الدقة تتغير.",
              sections: [
                { title: 'النهاية عندما n → ∞', type: 'formula', content: 'lim(n→∞) Σf(c\u1d62)Δx = ∫\u2090\u1d4e f(x)dx' },
                { title: 'التحويل', type: 'bullets', content: [
                  'الخطوة المنفصلة Δx تتقلص إلى التفاضل المستمر الصغير اللانهائي dx',
                  'الخطأ الهندسي للتجزئة المنتهية ينخفض إلى صفر تماماً',
                  'التقريب يصبح حقيقة مطلقة'
                ]},
                { title: 'حجر رشيد التفاضل والتكامل', type: 'text', content: 'التكامل المحدد هو ببساطة الاختصار النهائي لبناء ريمان اللانهائي.' }
              ]
            }
          },
          {
            id: 2,
            title: 'الدرس 2: التكامل بالأجزاء',
            icon: '📊',
            duration: '50 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.2/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.2-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الدوال فوق محور x تعطي قيم تكامل موجبة. الدوال تحته تعطي قيماً سالبة.',
              sections: [
                { title: 'المساحة الموقعة (الموضع الصافي)', type: 'text', content: '∫₀³π sin(t) dt = +2 + (-1) = +1 (الموضع النهائي)' },
                { title: 'المساحة الكلية (المسافة الكلية)', type: 'text', content: '∫₀³π |sin(t)| dt = +2 + |+1| = 3 وحدات (المسافة الكلية)' },
                { title: 'ورقة غش القواعد الجبرية', type: 'table', headers: ['القاعدة', 'الصيغة', 'الترجمة'], rows: [
                  ['عكس الحدود', '∫ᵇₐf(x)dx = -∫ᵃᵇf(x)dx', 'التكامل للخلف يقلب الإشارة'],
                  ['عرض صفري', '∫ᵃᵃf(x)dx = 0', 'الخط لا سمك له'],
                  ['المضاعف الثابت', '∫c·f(x)dx = c·∫f(x)dx', 'يمكن إخراج الكميات القياسية'],
                  ['مجموع الدوال', '∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx', 'المساحات المجمعة']
                ]}
              ]
            }
          },
          {
            id: 3,
            title: 'الدرس 3: تقنيات التكامل المثلثية',
            icon: '🏆',
            duration: '65 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.3/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.3-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'الاختراق: تجاوز الجمع اللانهائي من خلال إيجاد الأصل الرياضي للدالة.',
              sections: [
                { title: 'نظرية التقييم', type: 'formula', content: '∫ₐᵇ f(x)dx = F(b) - F(a)' },
                { title: 'المكونات', type: 'bullets', content: [
                  'F(b) - الحالة النهائية: قيمة المشتقة العكسية عند الحد العلوي',
                  'F(a) - الحالة الابتدائية: قيمة المشتقة العكسية عند الحد السفلي',
                  'المُجمِّع: يحسب المساحة الصافية الكلية تحت المنحنى بين الحدين a و b'
                ]},
                { title: 'الفكرة الأساسية', type: 'text', content: 'لتقييم تكامل محدد، ببساطة أوجد المشتقة العكسية واطرح الحالة الابتدائية من النهائية. لا حاجة لنهايتي مستطيلات لا نهائية.' }
              ]
            }
          },
          {
            id: 4,
            title: 'الدرس 4: تكامل الدوال النسبية باستخدام الكسور الجزئية',
            icon: '🔄',
            duration: '60 دقيقة',
            lessonUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.4/',
            lessonTitle: '📖 شرح الدرس',
            examUrl: 'https://hesham-afandi.github.io/12adv-math-T3-7.4-exam/',
            examTitle: '📝 ابدأ الاختبار',
            content: {
              intro: 'ماذا لو كان الحد العلوي للتكامل متغيراً؟ التكامل المحدود لم يعد رقماً ثابتاً - إنه دالة مساحة.',
              sections: [
                { title: 'الكشف', type: 'formula', content: 'd/dx ∫ₐˣ f(t)dt = f(x)' },
                { title: 'المكونات', type: 'bullets', content: [
                  'العملية الخارجية: معدل التغير (مشتقة) ...',
                  'المُجمِّع: ...دالة مساحة متوسعة ...',
                  'النتيجة: ...يساوي الارتفاع الدقيق للمنحنى الأصلي عند نقطة الحدود تلك'
                ]},
                { title: 'الفكرة الأساسية', type: 'text', content: 'اشتقاق تكامل يعيد ببساطة الدالة الأصلية. كل دالة مستمرة لها مشتقة عكسية متاحة بسهولة.' }
              ]
            }
          }
        ]
      }
    ]
  },
  'math-12-general-3': {
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
              intro: 'دالة المقلوب الأساسية هي f(x) = 1/x. منحنى هذه الدالة يسمى القطع الزائد (Hyperbola) وله خصائص مميزة.',
              sections: [
                { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = a/(x - h) + k' },
                { title: 'الخطوط المقاربة (Asymptotes)', type: 'bullets', content: [
                  'الخط المقارب الرأسي: x = h (حيث المقام = صفر).',
                  'الخط المقارب الأفقي: y = k (قيمة الدالة عندما x → ∞).',
                  'المنحنى يقترب من هذه الخطوط لكن لا يلمسها أبداً.'
                ]},
                { title: 'المجال والمدى', type: 'bullets', content: [
                  'المجال: جميع الأعداد الحقيقية ما عدا x = h.',
                  'المدى: جميع الأعداد الحقيقية ما عدا y = k.'
                ]},
                { title: 'تأثير الثابت a', type: 'text', content: 'إذا كان a > 0، المنحنى يقع في الربعين الأول والثالث. إذا كان a < 0، يقع في الربعين الثاني والرابع.' }
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
                  'إيجاد الخطوط المقاربة الأفقية (مقارنة درجات البسط والمقام).',
                  'إيجاد نقاط التقاطع مع المحاور (x=0 و y=0).',
                  'رسم المنحنى باستخدام النقاط المحورية والسلوك المقارب.'
                ]},
                { title: 'الخطوط المقاربة الأفقية', type: 'bullets', content: [
                  'إذا كانت درجة البسط < درجة المقام: y = 0.',
                  'إذا كانت درجة البسط = درجة المقام: y = معامل البسط / معامل المقام.',
                  'إذا كانت درجة البسط > درجة المقام: لا يوجد خط مقارب أفقي (قد يوجد مائل).'
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
                { title: 'التغير المباشر', type: 'formula', content: 'y = kx (حيث k هو ثابت التغير)' },
                { title: 'التغير العكسي', type: 'formula', content: 'y = k/x أو y·x = k' },
                { title: 'التغير المشترك', type: 'formula', content: 'y = k·(x^a)/(z^b) (مزيج من التغير المباشر والعكسي)' },
                { title: 'خطوات الحل', type: 'bullets', content: [
                  'كتابة المعادلة العامة بناءً على نوع التغير.',
                  'استخدام المعطيات لإيجاد قيمة ثابت التغير k.',
                  'تعويض قيمة k في المعادلة العامة.',
                  'استخدام المعادلة النهائية لحساب المجهول المطلوب.'
                ]}
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
                  'حل المعادلة الناتجة (خطية أو تربيعية).',
                  'فحص الحلول واستبعاد الحلول الدخيلة.'
                ]},
                { title: 'حل المتباينات النسبية', type: 'bullets', content: [
                  'نقل جميع الحدود إلى طرف واحد لتصبح المتباينة = 0.',
                  'إيجاد النقاط الحرجة (أصفار البسط والمقام).',
                  'رسم خط الأعداد وتحديد الإشارة في كل فترة.',
                  'اختيار الفترات التي تحقق إشارة المتباينة مع مراعاة الأقواس.'
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
                ]},
                { title: 'النسب المقلوبة', type: 'bullets', content: [
                  'Csc(θ) = 1/Sin(θ) = الوتر / المقابل',
                  'Sec(θ) = 1/Cos(θ) = الوتر / المجاور',
                  'Cot(θ) = 1/Tan(θ) = المجاور / المقابل'
                ]},
                { title: 'نظرية فيثاغورس', type: 'formula', content: 'a² + b² = c² (حيث c هو الوتر)' }
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
              intro: 'يمكن قياس الزوايا بوحدتين مختلفتين: الدرجات (Degrees) والراديان (Radians). الراديان هو الوحدة الطبيعية في الرياضيات المتقدمة.',
              sections: [
                { title: 'التحويل بين الدرجات والراديان', type: 'formula', content: 'الراديان = الدرجات × (π/180) | الدرجات = الراديان × (180/π)' },
                { title: 'الزوايا الشائعة', type: 'table', headers: ['الدرجات', 'الراديان'], rows: [
                  ['0°', '0'],
                  ['30°', 'π/6'],
                  ['45°', 'π/4'],
                  ['60°', 'π/3'],
                  ['90°', 'π/2'],
                  ['180°', 'π'],
                  ['270°', '3π/2'],
                  ['360°', '2π']
                ]},
                { title: 'طول القوس', type: 'formula', content: 's = rθ (حيث θ بالراديان و r نصف القطر)' },
                { title: 'مساحة القطاع', type: 'formula', content: 'A = (1/2)r²θ (حيث θ بالراديان)' }
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
              intro: 'الزوايا العامة يمكن أن تكون في أي ربع من أرباع دائرة الوحدة. نستخدم الزاوية المرجعية (Reference Angle) لإيجاد قيم النسب المثلثية.',
              sections: [
                { title: 'أرباع الدائرة والإشارات', type: 'table', headers: ['الربع', 'Sin', 'Cos', 'Tan'], rows: [
                  ['الأول (I)', '+', '+', '+'],
                  ['الثاني (II)', '+', '-', '-'],
                  ['الثالث (III)', '-', '-', '+'],
                  ['الرابع (IV)', '-', '+', '-']
                ]},
                { title: 'الزاوية المرجعية', type: 'text', content: 'هي الزاوية الحادة بين الضلع النهائي ومحور x. قيم النسب المثلثية للزاوية الأصلية تساوي قيم الزاوية المرجعية مع تحديد الإشارة حسب الربع.' },
                { title: 'نقاط دائرة الوحدة', type: 'formula', content: '(cos θ, sin θ) هي إحداثيات النقطة على دائرة الوحدة للزاوية θ' }
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
                { title: 'صيغة قانون الجيب', type: 'formula', content: 'a/sin(A) = b/sin(B) = c/sin(C)' },
                { title: 'حالات الاستخدام', type: 'bullets', content: [
                  'عند معرفة زاويتين وضلع (AAS أو ASA).',
                  'عند معرفة ضلعين وزاوية مقابلة لأحدهما (SSA) - حالة الغموض.'
]},
                { title: 'مساحة المثلث', type: 'formula', content: 'Area = (1/2)ab·sin(C) = (1/2)bc·sin(A) = (1/2)ac·sin(B)' },
                { title: 'حالة الغموض (SSA)', type: 'bullets', content: [
                  'إذا كان sin(θ) > 1: لا يوجد حل.',
                  'إذا كان sin(θ) = 1: حل واحد (زاوية قائمة).',
                  'إذا كان 0 < sin(θ) < 1: حلان محتملان (θ و 180°-θ).'
                ]}
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
                { title: 'صيغة قانون جيب التمام', type: 'formula', content: 'c² = a² + b² - 2ab·cos(C)' },
                { title: 'الصيغ الأخرى', type: 'bullets', content: [
                  'a² = b² + c² - 2bc·cos(A)',
                  'b² = a² + c² - 2ac·cos(B)'
                ]},
                { title: 'حالات الاستخدام', type: 'bullets', content: [
                  'عند معرفة ثلاثة أضلاع (SSS) لإيجاد الزوايا.',
                  'عند معرفة ضلعين والزاوية المحصورة بينهما (SAS).'
                ]},
                { title: 'إيجاد الزاوية', type: 'formula', content: 'cos(C) = (a² + b² - c²) / (2ab)' }
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
                { title: 'الدورية (Period)', type: 'bullets', content: [
                  'Sin(x) و Cos(x) و Csc(x) و Sec(x): الدور = 2π',
                  'Tan(x) و Cot(x): الدور = π'
                ]},
                { title: 'الخصائص العامة', type: 'bullets', content: [
                  'المجال: جميع الأعداد الحقيقية (ما عدا أصفار المقام).',
                  'المدى: [-1, 1] لـ Sin و Cos، وباقي الأعداد الحقيقية للباقية.',
                  'التماثل: Cos دالة زوجية، Sin دالة فردية.'
                ]},
                { title: 'العلاقة الأساسية', type: 'formula', content: 'sin²(x) + cos²(x) = 1' }
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
              intro: 'الصيغة العامة للدوال المثلثية المحولة هي y = A·sin(B(x - C)) + D أو y = A·cos(B(x - C)) + D.',
              sections: [
                { title: 'السعة (Amplitude)', type: 'formula', content: '|A| (القيمة المطلقة للمعامل A)' },
                { title: 'الدور (Period)', type: 'formula', content: '2π/|B| لـ Sin و Cos' },
                { title: 'إزاحة الطور (Phase Shift)', type: 'formula', content: 'C (إزاحة يميناً إذا C > 0، يساراً إذا C < 0)' },
                { title: 'الإزاحة الرأسية', type: 'formula', content: 'D (الخط الأوسط: y = D)' },
                { title: 'خطوات الرسم', type: 'bullets', content: [
                  'تحديد السعة، الدور، إزاحة الطور، والإزاحة الرأسية.',
                  'رسم الخط الأوسط y = D.',
                  'تحديد نقاط البداية والنهاية للدورة الواحدة.',
                  'تقسيم الدورة إلى أربع نقاط رئيسية ورسم المنحنى.'
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
                { title: 'تأثير A (السعة)', type: 'bullets', content: [
                  '|A| > 1: تمدد رأسي.',
                  '0 < |A| < 1: انضغاط رأسي.',
                  'A < 0: انعكاس حول المحور x.'
                ]},
                { title: 'تأثير B (الدور)', type: 'bullets', content: [
                  '|B| > 1: انضغاط أفقي (دور أقصر).',
                  '0 < |B| < 1: تمدد أفقي (دور أطول).',
                  'B < 0: انعكاس حول المحور y.'
                ]},
                { title: 'تأثير C (إزاحة الطور)', type: 'text', content: 'إزاحة أفقية بمقدار C وحدة. إذا كانت الصيغة (x - C) فالإزاحة يميناً، وإذا كانت (x + C) فالإزاحة يساراً.' },
                { title: 'تأثير D (الإزاحة الرأسية)', type: 'text', content: 'رفع أو خفض المنحنى بمقدار D. الخط الأوسط يصبح y = D بدلاً من y = 0.' }
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
              intro: 'الدوال المثلثية العكسية تعكس العلاقة: بدلاً من إيجاد النسبة من الزاوية، نجد الزاوية من النسبة. يجب تقييد المجال لضمان أن تكون الدالة واحدة لواحد.',
              sections: [
                { title: 'الدوال العكسية الأساسية', type: 'bullets', content: [
                  'Arcsin(x): المجال [-1, 1]، المدى [-π/2, π/2]',
                  'Arccos(x): المجال [-1, 1]، المدى [0, π]',
                  'Arctan(x): المجال جميع الأعداد الحقيقية، المدى (-π/2, π/2)'
                ]},
                { title: 'الرموز المستخدمة', type: 'bullets', content: [
                  'sin⁻¹(x) = arcsin(x)',
                  'cos⁻¹(x) = arccos(x)',
                  'tan⁻¹(x) = arctan(x)'
                ]},
                { title: 'حل المعادلات المثلثية', type: 'text', content: 'استخدام الدوال العكسية لإيجاد الزاوية المرجعية، ثم استخدام الدورية لإيجاد جميع الحلول في الفترة المطلوبة.' }
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
                { title: 'المتطابقات النسبية', type: 'bullets', content: [
                  'tan(θ) = sin(θ)/cos(θ)',
                  'cot(θ) = cos(θ)/sin(θ)',
                  'csc(θ) = 1/sin(θ)',
                  'sec(θ) = 1/cos(θ)'
                ]},
                { title: 'المتطابقات المقلوبة', type: 'bullets', content: [
                  'sin(θ)·csc(θ) = 1',
                  'cos(θ)·sec(θ) = 1',
                  'tan(θ)·cot(θ) = 1'
                ]},
                { title: 'المتطابقات البيثاغورية', type: 'bullets', content: [
                  'sin²(θ) + cos²(θ) = 1',
                  '1 + tan²(θ) = sec²(θ)',
                  '1 + cot²(θ) = csc²(θ)'
                ]}
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
                  { title: 'استراتيجيات الإثبات', type: 'bullets', content: [
                    'ابدأ بالطرف الأكثر تعقيداً.',
                    'حوّل جميع الدوال إلى sin و cos إذا لزم الأمر.',
                    'استخدم المتطابقات البيثاغورية لتبسيط المقادير.',
                    'حلّل الكسور ووحّد المقامات.',
                    'لا تنقل حدوداً بين الطرفين (اعمل على طرف واحد فقط).'
                  ]},
                  { title: 'أمثلة شائعة', type: 'bullets', content: [
                    '(1 - cos²x)/cos(x) = sin(x)·tan(x)',
                    '1/(1+sin x) + 1/(1-sin x) = 2·sec²(x)',
                    '(sec x - tan x)/(csc x - cot x) = (sin x + 1)/cos(x)'
                  ]}
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
                { title: 'متطابقات الجمع', type: 'bullets', content: [
                  'sin(A + B) = sin(A)cos(B) + cos(A)sin(B)',
                  'cos(A + B) = cos(A)cos(B) - sin(A)sin(B)',
                  'tan(A + B) = [tan(A) + tan(B)] / [1 - tan(A)tan(B)]'
                ]},
                { title: 'متطابقات الطرح', type: 'bullets', content: [
                  'sin(A - B) = sin(A)cos(B) - cos(A)sin(B)',
                  'cos(A - B) = cos(A)cos(B) + sin(A)sin(B)',
                  'tan(A - B) = [tan(A) - tan(B)] / [1 + tan(A)tan(B)]'
                ]},
                { title: 'تطبيقات', type: 'text', content: 'تُستخدم هذه المتطابقات لإيجاد القيم الدقيقة لزوايا غير شائعة (مثل 15° = 45° - 30°) وتبسيط التعابير المعقدة.' }
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
                { title: 'متطابقات ضعف الزاوية', type: 'bullets', content: [
                  'sin(2A) = 2·sin(A)·cos(A)',
                  'cos(2A) = cos²(A) - sin²(A) = 2cos²(A) - 1 = 1 - 2sin²(A)',
                  'tan(2A) = 2tan(A) / [1 - tan²(A)]'
                ]},
                { title: 'متطابقات نصف الزاوية', type: 'bullets', content: [
                  'sin(A/2) = ±√[(1 - cos A)/2]',
                  'cos(A/2) = ±√[(1 + cos A)/2]',
                  'tan(A/2) = ±√[(1 - cos A)/(1 + cos A)] = sin A / (1 + cos A)'
                ]},
                { title: 'تحديد الإشارة', type: 'text', content: 'الإشارة (±) تُحدد بناءً على الربع الذي تقع فيه الزاوية A/2.' }
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
                { title: 'استراتيجيات الحل', type: 'bullets', content: [
                  'عزل الدالة المثلثية في طرف واحد.',
                  'استخدام الدالة العكسية لإيجاد الزاوية المرجعية.',
                  'استخدام الدورية لإيجاد جميع الحلول في الفترة المحددة.',
                  'استخدام المتطابقات لتبسيط المعادلات المعقدة.'
                ]},
                { title: 'أنواع المعادلات', type: 'bullets', content: [
                  'معادلات خطية: sin(x) = 1/2',
                  'معادلات تربيعية: 2sin²(x) - sin(x) - 1 = 0 (تُحل بالتحليل)',
                  'معادلات باستخدام متطابقات: تحويل المعادلة إلى شكل أبسط.'
                ]},
                { title: 'الدورية والحلول العامة', type: 'bullets', content: [
                  'لـ sin(x) = k: x = θ + 2nπ أو x = π - θ + 2nπ',
                  'لـ cos(x) = k: x = ±θ + 2nπ',
                  'لـ tan(x) = k: x = θ + nπ',
                  'حيث n عدد صحيح و θ هي الزاوية المرجعية.'
                ]}
              ]
            }
          }
        ]
      }
    ]
  }
};
