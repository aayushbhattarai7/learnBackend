import {Column, Entity, OneToOne} from 'typeorm'
import Base from './base.entity'
import { AuthDetails } from './details.entity'
import {AdminAllowedFeature, Role} from '../constant/enum'
@Entity('auth')
export class Auth extends Base {
    @Column({
        unique: true,
    })
    email:string

    @Column({
        unique:true,
    })
    username:string

    @Column({select:false})
    password: string

    @Column({
        type:'enum',
        enum:Role
    })
    role:Role

    @Column({ name: 'allowed_feature', type: 'enum', enum: AdminAllowedFeature, array: true, nullable: true })
    allowedFeature: AdminAllowedFeature[]

    @OneToOne(() => AuthDetails, (details) => details.auth,{cascade: true})
    details:AuthDetails

    @Column({nullable:true})
    token:string

    @Column({name:'otp_verified', default:false})
    otpVerified: boolean
}