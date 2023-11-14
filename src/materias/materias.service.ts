import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { materia } from 'src/interfaces/materia';
//import { CreateMateriaDto } from './dto/create-materia.dto';
//import { UpdateMateriaDto } from './dto/update-materia.dto';
//import { NOTFOUND } from 'dns';

@Injectable()
export class MateriasService {

  materias: materia[] = [
    { id: 1, nombre: 'Matematica' },
    { id: 2, nombre: 'Base de Datos' },
    { id: 3, nombre: 'Programacion Web' },
    { id: 4, nombre: 'Programacion Movil'},
    { id: 5, nombre: 'Legislacion informatica'}
  ];

  @Get()
  findAll() {
    return this.materias;
  }

  findOne(id) {
    const res = this.materias.find(objeto => objeto.id === parseInt(id));
    if (!res) throw new NotFoundException ('No existe');
    return res
  }

  /*create(createMateriaDto: CreateMateriaDto) {
    return 'This action adds a new materia';
  }*/

  /*update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} materia`;
  }*/
}