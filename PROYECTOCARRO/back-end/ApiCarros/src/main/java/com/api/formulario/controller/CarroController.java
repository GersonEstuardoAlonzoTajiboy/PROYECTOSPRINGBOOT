package com.api.formulario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.formulario.model.Carro;
import com.api.formulario.repository.CarroRepository;

@RestController
@RequestMapping("carro")
public class CarroController {
	@Autowired(required=true)
	private CarroRepository repositorio;
	
	@GetMapping(value="listar")
	private List<Carro> listar(){
		return  repositorio.findAll();
	}
	
	@PostMapping(value="crear")
	private Carro crear(@RequestBody Carro carroFrontEnd) {
		Carro carro = new Carro();
		carro.setModelo(carroFrontEnd.getModelo());
		carro.setMarca(carroFrontEnd.getMarca());
		carro.setFechaCirculacion(carroFrontEnd.getFechaCirculacion());
		carro.setColor(carroFrontEnd.getColor());
		carro.setPlaca(carroFrontEnd.getPlaca());
		carro.setPaisOrigen(carroFrontEnd.getPaisOrigen());
		carro.setObservaciones(carroFrontEnd.getObservaciones());
		repositorio.save(carro);
		return carro;
	}
	
	@PutMapping(value="modificar")
	private Carro modificar(@RequestBody Carro carroFrontEnd) {
		Carro carro = repositorio.findById(carroFrontEnd.getId());
		if (carro!=null) {
			carro.setModelo(carroFrontEnd.getModelo());
			carro.setMarca(carroFrontEnd.getMarca());
			carro.setFechaCirculacion(carroFrontEnd.getFechaCirculacion());
			carro.setColor(carroFrontEnd.getColor());
			carro.setPlaca(carroFrontEnd.getPlaca());
			carro.setPaisOrigen(carroFrontEnd.getPaisOrigen());
			carro.setObservaciones(carroFrontEnd.getObservaciones());
			repositorio.save(carro);
			return carro;	
		}else return carroFrontEnd;	
	}
	
	@DeleteMapping(value="eliminar/{id}")
	private Carro eliminar(@PathVariable("id") Long id) {
		Carro carro = repositorio.findById(id);
		if (carro!=null) {
			repositorio.delete(carro);
		}
		return carro;
	}
}
