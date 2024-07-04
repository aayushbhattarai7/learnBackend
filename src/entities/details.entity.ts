import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import Base from '../entities/base.entity'
import { IMultiLanguage } from '../interface/global.interface'
import {Auth} from './auth.entity'
import Media from './media.entity'
@Entity('auth_details')
export class AuthDetails extends Base {
    @Column({name:'first_name', type:'json'})
    firtsName: IMultiLanguage

    @Column({name:'middle_name', type:'json', nullable:true})
    middleName: IMultiLanguage | null

    @Column({name:'last_name', type:'json'})
    lastName: IMultiLanguage

    @Column({ name: 'phone_number', nullable: true })
    phoneNumber: string

    @OneToOne(() => Auth, (auth) => auth.details, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })

    @JoinColumn({name:'auth_id'})
    auth:Auth

    @OneToMany(() => Media, (media) => media.details)
    profileImage: Media

}