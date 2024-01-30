import { hisPost } from "@/api/server";

export function getPatientInfoApi(data) {
  return hisPost('/rest/queryDataBySql/080105/14', data)
}
export function createBrxxApi(data) {
  return hisPost('/rest/commitData/080201/3', data)
}