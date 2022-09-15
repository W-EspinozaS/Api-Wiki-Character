import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Apariciones } from "../dto/create-character.dto";

export type CharacterDocument = Character & Document;

@Schema()
export class Character{
    _id: mongoose.Types.ObjectId;
    @Prop()
    nombre:      string;
    @Prop()
    alias:       string;
    @Prop()
    descripcion: string;
    @Prop()
    foto:        string;
    @Prop()
    lanzamiento: string;
    @Prop()
    status:      string;
    @Prop([Apariciones])
    apariciones: Apariciones[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
