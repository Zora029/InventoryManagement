import { CheckCircle } from '@mui/icons-material';
import { ImodalBoxProps } from '../../types/index';

function SuccessBox({ setisOpen }: ImodalBoxProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:border-white dark:bg-boxdark">
            {/*header*/}
            <div className="border-slate-200 flex items-start justify-center rounded-t border-b border-solid p-5">
              <h3 className="text-2xl font-semibold">Success</h3>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <div className="flex- w-full flex-col space-y-4">
                <div className="flex w-full flex-col justify-between space-y-3 pb-6">
                  <div className="text-center">
                    <CheckCircle sx={{ color: '#00E676', fontSize: 60 }} />
                  </div>
                  <div className="text-lg">Operation Performed Successfuly</div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="mx-2 mb-2 flex flex-row justify-center">
              <button
                className="mr-1 mb-1 rounded-md bg-[#00E676] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-[#018b49]  hover:text-white hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => setisOpen(false)}
              >
                Yeah
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

export default SuccessBox;
