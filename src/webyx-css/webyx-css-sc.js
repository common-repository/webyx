export default function webyxCSSSC ( hmsd, hmcd, vmsd, vmcd, hmsm, hmcm, vmsm, vmcm ) {
  return `.webyx-slide-viewport-dsk{transition:left ${hmsd}ms ${hmcd},top ${vmsd}ms ${vmcd}}.webyx-slide-viewport-mobile{transition:left ${hmsm}ms ${hmcm},top ${vmsm}ms ${vmcm}}`;
}