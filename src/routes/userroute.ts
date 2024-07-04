import {Router as IRouter} from 'express'
import Router from 'express'
const router: IRouter = Router()

router.get('/', (req, res) => res.json({message:"hello"}))

export default router