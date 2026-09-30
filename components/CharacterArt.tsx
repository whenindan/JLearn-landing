// Character artwork from the JLearn cast sheet. Flat colour, no outlines.
// Class names (whole, eyes, ears, tail, leaf, ties, shadow) are animation hooks in globals.css.

export function PokoArt() {
  return (
    <svg className="char" viewBox="0 0 200 220" aria-hidden>
    <ellipse className="shadow" cx="100" cy="211" rx="54" ry="7" fill="#2B2320" opacity="0.12"/>
    <g className="whole">
    <g className="tail"><ellipse cx="156" cy="172" rx="16" ry="28" transform="rotate(40 156 172)" fill="#7A5B42"/><ellipse cx="170" cy="156" rx="9" ry="11" transform="rotate(40 170 156)" fill="#4A3628"/></g>
    <ellipse cx="76" cy="202" rx="17" ry="8" fill="#5B4433"/>
    <ellipse cx="124" cy="202" rx="17" ry="8" fill="#5B4433"/>
    <ellipse cx="100" cy="152" rx="56" ry="52" fill="#8C6B4F"/>
    <ellipse cx="100" cy="162" rx="34" ry="32" fill="#F3E3C8"/>
    <ellipse cx="50" cy="150" rx="10" ry="17" transform="rotate(20 50 150)" fill="#7A5B42"/>
    <ellipse cx="150" cy="150" rx="10" ry="17" transform="rotate(-20 150 150)" fill="#7A5B42"/>
    <g className="ears"><circle cx="62" cy="56" r="16" fill="#5B4433"/><circle cx="62" cy="58" r="8" fill="#C9A27E"/><circle cx="138" cy="56" r="16" fill="#5B4433"/><circle cx="138" cy="58" r="8" fill="#C9A27E"/></g>
    <ellipse cx="100" cy="96" rx="56" ry="48" fill="#8C6B4F"/>
    <ellipse cx="100" cy="74" rx="22" ry="13" fill="#A6856A"/>
    <ellipse cx="78" cy="98" rx="21" ry="15" transform="rotate(-15 78 98)" fill="#4A3628"/>
    <ellipse cx="122" cy="98" rx="21" ry="15" transform="rotate(15 122 98)" fill="#4A3628"/>
    <g className="eyes"><circle cx="80" cy="97" r="8" fill="#FBF6EC"/><circle cx="80" cy="97" r="5.5" fill="#1E1712"/><circle cx="82" cy="95" r="2" fill="#FFFFFF"/><circle cx="120" cy="97" r="8" fill="#FBF6EC"/><circle cx="120" cy="97" r="5.5" fill="#1E1712"/><circle cx="122" cy="95" r="2" fill="#FFFFFF"/></g>
    <ellipse cx="100" cy="116" rx="18" ry="12" fill="#F3E3C8"/>
    <ellipse cx="100" cy="110" rx="6.5" ry="4.5" fill="#1E1712"/>
    <path className="ln w2" d="M93 119 Q100 125 107 119" stroke="#1E1712"/>
    <circle cx="63" cy="116" r="7" fill="#E89A8C" opacity="0.6"/>
    <circle cx="137" cy="116" r="7" fill="#E89A8C" opacity="0.6"/>
    <g className="leaf"><path d="M100 52 C 84 42, 86 22, 106 16 C 114 30, 112 46, 100 52 Z" fill="#6B9A5B"/><path className="ln w2" d="M100 52 C 102 40, 104 30, 106 20" stroke="#4E7A42"/></g>
    </g>
    </svg>
  );
}

export function MameArt() {
  return (
    <svg className="char" viewBox="0 0 200 220" aria-hidden>
    <ellipse className="shadow" cx="100" cy="211" rx="48" ry="7" fill="#2B2320" opacity="0.12"/>
    <g className="whole">
    <g className="tail"><path className="ln w12" d="M142 168 C 176 170, 180 128, 158 124 C 144 122, 142 140, 156 140" stroke="#E3B77A"/></g>
    <ellipse cx="78" cy="202" rx="15" ry="8" fill="#E3B77A"/>
    <ellipse cx="122" cy="202" rx="15" ry="8" fill="#E3B77A"/>
    <ellipse cx="100" cy="154" rx="50" ry="48" fill="#F0C98A"/>
    <ellipse cx="100" cy="164" rx="30" ry="30" fill="#FFF8EC"/>
    <ellipse cx="55" cy="152" rx="9" ry="15" transform="rotate(20 55 152)" fill="#E3B77A"/>
    <ellipse cx="145" cy="152" rx="9" ry="15" transform="rotate(-20 145 152)" fill="#E3B77A"/>
    <path d="M64 128 Q100 140 136 128 L100 160 Z" fill="#D9472B"/>
    <g className="ears"><path className="rj" d="M58 78 L62 34 L94 62 Z" fill="#F0C98A" stroke="#F0C98A"/><path d="M65 66 L67 46 L84 61 Z" fill="#D99A5B"/><path className="rj" d="M142 78 L138 34 L106 62 Z" fill="#F0C98A" stroke="#F0C98A"/><path d="M135 66 L133 46 L116 61 Z" fill="#D99A5B"/></g>
    <ellipse cx="100" cy="96" rx="54" ry="44" fill="#F0C98A"/>
    <ellipse cx="78" cy="112" rx="24" ry="17" fill="#FFF8EC"/>
    <ellipse cx="122" cy="112" rx="24" ry="17" fill="#FFF8EC"/>
    <ellipse cx="100" cy="122" rx="22" ry="12" fill="#FFF8EC"/>
    <circle cx="82" cy="80" r="4" fill="#FFF8EC"/>
    <circle cx="118" cy="80" r="4" fill="#FFF8EC"/>
    <g className="eyes"><circle cx="82" cy="98" r="7" fill="#1E1712"/><circle cx="84.5" cy="95.5" r="2.5" fill="#FFFFFF"/><circle cx="118" cy="98" r="7" fill="#1E1712"/><circle cx="120.5" cy="95.5" r="2.5" fill="#FFFFFF"/></g>
    <ellipse cx="100" cy="110" rx="6" ry="4.5" fill="#1E1712"/>
    <path className="ln w2" d="M91 116 Q95.5 122 100 116 Q104.5 122 109 116" stroke="#1E1712"/>
    <circle cx="63" cy="116" r="6.5" fill="#F2A08C" opacity="0.7"/>
    <circle cx="137" cy="116" r="6.5" fill="#F2A08C" opacity="0.7"/>
    </g>
    </svg>
  );
}

export function KonArt() {
  return (
    <svg className="char" viewBox="0 0 200 220" aria-hidden>
    <ellipse className="shadow" cx="100" cy="211" rx="46" ry="7" fill="#2B2320" opacity="0.12"/>
    <g className="whole">
    <g className="tail"><path d="M134 178 C 178 186, 198 140, 176 102 C 168 134, 154 150, 130 156 Z" fill="#FFF4E6"/><path d="M134 178 C 176 184, 192 150, 185 125 C 172 142, 154 150, 130 156 Z" fill="#E46F2E"/></g>
    <ellipse cx="80" cy="202" rx="14" ry="8" fill="#3A2A24"/>
    <ellipse cx="120" cy="202" rx="14" ry="8" fill="#3A2A24"/>
    <ellipse cx="100" cy="156" rx="46" ry="46" fill="#E46F2E"/>
    <ellipse cx="100" cy="166" rx="26" ry="28" fill="#FFF4E6"/>
    <ellipse cx="59" cy="154" rx="9" ry="15" transform="rotate(20 59 154)" fill="#3A2A24"/>
    <ellipse cx="141" cy="154" rx="9" ry="15" transform="rotate(-20 141 154)" fill="#3A2A24"/>
    <g className="ties"><path className="ln w5" d="M52 80 C 38 80, 30 88, 24 100" stroke="#FFF4E6"/><path className="ln w5" d="M52 80 C 40 86, 36 96, 36 108" stroke="#FFF4E6"/></g>
    <g className="ears"><path className="rj" d="M60 74 L60 22 L96 56 Z" fill="#E46F2E" stroke="#E46F2E"/><path d="M66 62 L66 36 L85 56 Z" fill="#3A2A24"/><path className="rj" d="M140 74 L140 22 L104 56 Z" fill="#E46F2E" stroke="#E46F2E"/><path d="M134 62 L134 36 L115 56 Z" fill="#3A2A24"/></g>
    <path d="M46 88 C 46 62, 70 50, 100 50 C 130 50, 154 62, 154 88 C 154 110, 134 124, 100 132 C 66 124, 46 110, 46 88 Z" fill="#E46F2E"/>
    <path d="M60 100 C 76 96, 92 102, 100 114 C 108 102, 124 96, 140 100 C 134 116, 118 128, 100 132 C 82 128, 66 116, 60 100 Z" fill="#FFF4E6"/>
    <path d="M52 72 Q100 58 148 72 L150 81 Q100 67 50 81 Z" fill="#FFF4E6"/>
    <circle cx="100" cy="68" r="5.5" fill="#D9472B"/>
    <path className="ln w3" d="M70 84 L88 89" stroke="#3A2A24"/>
    <path className="ln w3" d="M130 84 L112 89" stroke="#3A2A24"/>
    <g className="eyes"><ellipse cx="80" cy="98" rx="6.5" ry="7" fill="#1E1712"/><ellipse cx="120" cy="98" rx="6.5" ry="7" fill="#1E1712"/><path d="M72 90 L89 90 L89 96 L72 96 Z" fill="#E46F2E"/><path d="M111 90 L128 90 L128 96 L111 96 Z" fill="#E46F2E"/><circle cx="82.5" cy="100" r="2" fill="#FFFFFF"/><circle cx="122.5" cy="100" r="2" fill="#FFFFFF"/></g>
    <ellipse cx="100" cy="114" rx="5.5" ry="4" fill="#1E1712"/>
    <path className="ln w2" d="M95 121 Q103 125 110 117" stroke="#1E1712"/>
    </g>
    </svg>
  );
}
