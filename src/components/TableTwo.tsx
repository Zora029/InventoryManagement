const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Recent Activities
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Activity ID</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Acivity</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Target name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Date</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Product count</p>
        </div>
      </div>

      {/* row */}
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">F034</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Incomes</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">Sony</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">2023-08-08</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">45</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">F034</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Incomes</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">Sony</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">2023-08-08</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">45</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">F034</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Incomes</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">Sony</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">2023-08-08</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">45</p>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
