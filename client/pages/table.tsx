import Name from '../components/Name'
import { SapientTable } from '../components/Table/index'
import { Button } from '@material-ui/core'
import { CardCollection } from '../components/Card'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <>
      <SapientTable />
      <br/>
      <Name />
      <Button
      variant="contained"
      color="primary"
      href="/">Card view</Button>
    </>
  )
}

export default Page
