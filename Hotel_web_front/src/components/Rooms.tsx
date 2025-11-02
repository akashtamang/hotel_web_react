

const Rooms = () => {
    return (
        <div>
<div className="w-full flex flex-col md:flex-row py-24 dark:bg-gray-800">
  <div className="flex flex-col w-[90%] lg:w-4/5 2xl:w-3/5 mx-auto">	
    <div className="w-full md:w-4/5 md:mx-auto  pt-3 px-4 md:px-0! text-center">
      <h1 className="text-3xl mt-2 md:text-4xl font-semibold text-gray-800">
        The <span className="text-emerald-600"> Feature</span> component
      </h1>
      <p className="text-xl font-thin mb-4 line-clamp-4 mt-4 md:line-clamp-none text-gray-500">
        You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite. Optional you can you can contact the author and say thanks by send a message.
      </p>
    </div>
    <div className="flex flex-col md:flex-row w-full">	
      <div className="basis-1/3 w-full border border-gray-100 dark:border-gray-600! rounded-md pr-0 md:mr-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full relative z-10 max-h-80" />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Wifi — TV (Cable)</div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Saison room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Single</span> room
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            You have the option of canceling by 6 pm on the day of arrival. Dogs must be requested in advance. The max lines is set to three and all over are invisible. Hover with your mouse or push with a finger on your mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:border-gray-600!">
          <div className="w-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>89.00 ¬ Night</span>
          </div>
          <div className="w-1/2 text-yellow-400 text-right font-semibold">
            ☆☆☆☆<span className="text-gray-500 font-normal">☆</span>
          </div>
        </div>
      </div>	
      <div className="basis-1/3 w-full border border-gray-100 dark:border-gray-600! rounded-md pr-0 md:mx-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full relative z-10 max-h-80" title alt />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Wifi — TV (Cable)</div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Saison room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Love</span> Suite
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            In this suite there is a double bed and a bottle of sparkling wine on request at check-in. The max lines is set to three and all over are invisible. Hover with your mouse or push with a finger on your mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:border-gray-600!">
          <div className="basis-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>119.00 ¬ Night</span>
          </div>
          <div className="basis-1/2 text-yellow-400 text-end font-semibold">
            ☆☆☆<span className="text-gray-500 font-normal">☆☆</span>
          </div>
        </div>
      </div>
      <div className="basis-1/3 w-full border border-gray-100 dark:border-gray-600! rounded-md pr-0 md:ml-4 mt-6">
        <div className="flex flex-col relative">
          {/* Image (c) by: https://unsplash.com/de/@vojtechbruzek */}
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full relative z-10 max-h-80" />
          <div className="absolute z-20 bg-emerald-600 uppercase px-3 py-1 top-3 right-3 text-white text-sm">Wifi — TV (Sky)</div>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-sm mt-3 text-gray-300 dark:text-gray-600 font-semibold">
            Premium room
          </p>
          <h1 className="text-2xl my-2 md:text-3xl font-bold text-gray-600 ">
            <span className="text-emerald-600">Individual</span> room
          </h1>
          <p className="text-sm mb-3 line-clamp-3 hover:line-clamp-none text-gray-500 ">
            We add up to two more beds. Crib possible. Breakfast must be ordered <u>separately</u>. The max lines is set to three and all over are invisible. Hover with your mouse or push with a finger on your mobile device on the text to show all lines.
          </p>
        </div>
        <div className="flex flex-row py-3 px-4 border-t border-gray-100 dark:border-gray-600!">
          <div className="w-1/2 flex flex-row dark:text-gray-400">
            <span className="mr-1">$</span>
            <span>149.00 ¬ Night</span>
          </div>
          <div className="w-1/2 text-yellow-400 text-end font-semibold">
            ☆☆☆☆☆
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Rooms;