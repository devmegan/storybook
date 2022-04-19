import Hero from './components/Hero';
import Repos from './components/Repos';

import { HERO_CONTENT } from './Config';
export default function App() {
  // return (
  //   <div className="text-center mt-20">
  //     <h1 className="text-2xl">use <span className="font-mono bg-gray-200 text-black rounded-md p-2">npm run storybook</span> to see my components</h1>
  //   </div>
  // );

  return (
    <div>
      <Hero content={HERO_CONTENT}/>
      <div className="grid grid-cols-1 gap-10">
        <Repos />
      </div>
    </div>
  )
}