import './planPage.css'
// plan component
import PlanPackages from './PlanPageComponents/planPackages'

export default function PlanPage() {
  return (
    <div className='page plan-page-container'>
      <div className='plan-page-wrapper'>
        <div className='plan-page-text'>
          <h2>Choose a Plan</h2>
          <p>Choose a package that suits you and your pocket</p>
        </div>
        <div className='plan-page-packages'>
          <PlanPackages
           packageName='Starter'
           amount='250'
           numberOfQuestions='10'
          />
          <PlanPackages
          packageName='premium'
          amount='500'
          numberOfQuestions='22'
          />
          <PlanPackages
          packageName='Plantinium'
          amount='1000'
          numberOfQuestions='50'
          />
        </div>
      </div>
    </div>
  )
}
