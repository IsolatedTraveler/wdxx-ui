import { useUserStore } from "@/store";
import { RouteLocationNormalized } from "vue-router";

export function checkLogin(to?: RouteLocationNormalized): boolean {
  return ((to && to.meta && to.meta.login) as boolean) || useUserStore().getIsUser
}