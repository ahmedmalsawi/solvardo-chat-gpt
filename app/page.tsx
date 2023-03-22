import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20 ">Solvardo Chat GPT</h1>
      <div className="flex space-x-2  text-center">
        <div className="f">
          <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8"/>
            <h2 className="d">Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div className="f">
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8"/>
            <h2 className="d">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Change GPT Model ro use"</p>
            <p className="infoText">"Messages are stored in Firebase's Firestore"</p>
            <p className="infoText">"Hot Toast notifications when ChatGPT is thinking"</p>
          </div>
        </div>
        <div className="f">
          <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8"/>
            <h2 className="d">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"May occaisonally generate incorrect information"</p>
            <p className="infoText">"May occaionally produce harmful instructions or baised content"</p>
            <p className="infoText">"Limited knowlaged of world and events after 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page