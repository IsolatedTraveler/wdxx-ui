import { useCssInit } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { UploadEmits, UploadProps } from "./upload"
import { EventUpdate, EventUpdateObj } from "@ui/vars"
export const useUpload = (props: UploadProps, emit: SetupContext<UploadEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), { _class } = useCssInit(props, 'upload', { cssClass: [], classAdd: [] })
    , _input = ref<HTMLInputElement>(), encode = 'UTF-8'
  function triggerFileInputClick() {
    if (_input.value)
      _input.value.click()
  }
  function readFile(file: File): Promise<{ lx: string, code?: string | ArrayBuffer | null | undefined }> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.onload = (ev => resolve({ code: ev.target?.result, lx: file.type }))
      reader.onerror = function (event) {
        let msg = '未知错误'
        if (event && event.target && event.target.error) {
          msg = event.target.error.message
        }
        reject({ msg: 'File could not be read: ' + msg })
      }
      if (props.type === 'content') {
        reader.readAsText(file, encode)
      } else if (props.type === 'url') {
        reader.readAsDataURL(file)
      }
    })
  }
  function fileChange(e: Event) {
    const inputElement = e.target as HTMLInputElement
      , file = inputElement.files
    if (file) {
      const files: File[] = props.multi ? Array.from(file) : [file[0]]
      Promise.all(files.map(readFile)).then(res => {
        emit(EventUpdate, res.map(it => it.code))
        emit(EventUpdateObj, res)
      })
    }
  }
  return {
    _ref,
    _class
    , _input
    , triggerFileInputClick
    , fileChange
  }
}