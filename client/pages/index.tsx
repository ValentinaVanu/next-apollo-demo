import Name from '../components/Name'
import { Button } from '@material-ui/core'
import { CardCollection } from '../components/Card'

const Page: React.FC = () => {
  return (
    <>
      <CardCollection />
      <br/>
      <Name />
      <Button
      variant="contained"
      color="primary"
      href="/table">Table view</Button>
    </>
  )
}

export default Page
