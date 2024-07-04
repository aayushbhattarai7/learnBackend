import fs from 'fs'
import path from 'path'
import { AfterLoad, Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { DotenvConfig } from '../config/env.config'
import { MediaType } from '../constant/enum'
import { AuthDetails } from './details.entity'
import Base from './base.entity'
import { getTempFolderPath, getUploadFolderPath } from '../utils/path.utils'

@Entity('media')
class Media extends Base {
    @Column({nullable:true})
    name: string
    @Column({
        name:'mime_type'

    })
    mimeType: string

    @Column({enum: MediaType, type:'enum'})
    type: MediaType
    @ManyToOne(() => AuthDetails, (details) => details.profileImage)
    @JoinColumn({name: 'details_id'})
    details:AuthDetails

    public path: string
    transferImageFromTempTOUploadFolder(id: string, type: MediaType): void {
        const TEMP_FOLDER_PATH = path.join(getTempFolderPath(), this.name)

        const UPLOAD_FOLDER_PATH = path.join(getUploadFolderPath(), type.toLowerCase(), id.toString())

        !fs.existsSync(UPLOAD_FOLDER_PATH) && fs.mkdirSync(UPLOAD_FOLDER_PATH,{recursive:true})
        fs.renameSync(TEMP_FOLDER_PATH, path.join(UPLOAD_FOLDER_PATH, this.name))
    }

    @AfterLoad()
    async loadImagePath():Promise<void> {
        this.path = `${DotenvConfig.BASE_URL}/${this.type.toLowerCase()}/${this.id}/${this.name}`
    }
}

export default Media