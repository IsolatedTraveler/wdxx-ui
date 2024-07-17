import ty from "./ty";
import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import { xtm } from "../var"
import { xtm as ml } from './var'
export default [
  getMenuItem(ml, 'his', '', xtm)
  , getMenuItem(ml, '首版', 'sb')
  , ...ty
]
