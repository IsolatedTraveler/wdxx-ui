import { Modifier,Placement,Options, ModifierArguments,State } from "@popperjs/core";

// 自定义修改器：根据参照元素与视口的位置关系决定 Popper 的偏移方向
export function flipToEdgeModifier(): Modifier<'flipToEdge', any> {
  return {
    name: 'flipToEdge',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],

    // 使用箭头函数作为方法并访问 state 属性
    fn ({ state, instance }: ModifierArguments<Options>) {
      var placement:Placement |undefined = getPlaceMent(state)
      if (placement) {
        setTimeout(() => {
          state.placement = placement!;
          instance.setOptions({placement})
        }, 0);
      }
    }
  };
}
export function getPlaceMent(state:State) {
  const reference = state!.elements.reference;
  const referenceRect = reference.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  let placement: Placement;
  if (referenceRect.left < viewportWidth / 2) {
    placement = 'bottom-end';
  } else {
    placement = 'bottom-start';
  }
  if (placement !== state.placement) {
    return placement
  }
}