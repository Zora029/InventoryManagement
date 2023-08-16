import { Help } from '@mui/icons-material';
import { IconfirmModalBoxDeleteProps } from '../../types/index';

function ConfirmBoxDelete({ setisOpen, onConfirm, num_produit }: IconfirmModalBoxDeleteProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:border-white dark:bg-boxdark">
            {/*header*/}
            <div className="border-slate-200 flex items-start justify-center rounded-t border-b border-solid p-5">
              <h3 className="text-2xl font-semibold">Confirmation</h3>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <div className="flex- w-full flex-col space-y-4">
                <div className="flex w-full flex-col justify-between space-y-3 pb-6">
                  <div className="text-center">
                    <Help sx={{ color: '#2962FF', fontSize: 60 }} />
                  </div>
                  <div className="text-lg">
                    Are you sure to perform the operation ?
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="mx-2 mb-2 flex flex-row justify-end space-x-2">
              <button
                className="mr-1 mb-1 rounded-md bg-[#555] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-[#363636]  hover:text-[--s-white] hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => {
                  setisOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="mr-1 mb-1 rounded-md bg-[#2962FF] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-[#1a3ea1]  hover:text-[--s-white] hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => {
                  onConfirm(num_produit);
                  setisOpen(false);
                }}
              >
                Confirm
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

export default ConfirmBoxDelete;
