const fileElem: HTMLInputElement = document.createElement('input');
fileElem.type = 'file';

let fileResolve: ((result: ArrayBuffer) => void);
let fileReject: ((reason?: any) => void);

fileElem.onchange = function ({ target }: Event) {
  const files = (target as HTMLInputElement).files;
  if (files && files.length) {
    const reader = new FileReader();
    reader.onload = function ({ target }: ProgressEvent<FileReader>) {
      fileResolve(target?.result as ArrayBuffer)
    };
    reader.onerror = (error) => {
      fileReject(error);
    };
    reader.readAsArrayBuffer(files[0]);
  }
};

export function fileImport(): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    fileResolve = resolve;
    fileReject = reject;
    fileElem.click();
  });
}