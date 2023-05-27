'use client' //컴포넌트 사용할 때 작성
import Testcomponent from './components/Testcomponent'
import './materialize.css'

export default function Home() {
  return (
    <div>
      <a class="waves-effect waves-light btn">button</a>
      <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
      <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
    </div>
    
  )
}
