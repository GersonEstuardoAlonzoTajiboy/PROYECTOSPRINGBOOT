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

import com.api.formulario.model.Marca;
import com.api.formulario.model.Pais;
import com.api.formulario.repository.MarcaRepository;

@RestController
@RequestMapping("marca")
public class MarcaController {
	@Autowired(required=true)
	private MarcaRepository repositorio;
	
	@GetMapping(value="listar")
	private List<Marca> listar(){
		return  repositorio.findAll();
	}
	
	@PostMapping(value="crear")
	private Marca crear(@RequestBody Marca marcaFrontEnd) {
		Marca marca = new Marca();
		marca.setNombre(marcaFrontEnd.getNombre());
		marca.setPais(marcaFrontEnd.getPais());
		repositorio.save(marca);
		return marca;
	}
	
	@PutMapping(value="modificar")
	private Marca modificar(@RequestBody Marca marcaFrontEnd) {
		Marca marca = repositorio.findById(marcaFrontEnd.getId());
		if (marca!=null) {
			marca.setNombre(marcaFrontEnd.getNombre());
			marca.setPais(marcaFrontEnd.getPais());
			repositorio.save(marca);
			return marca;	
		}else return marcaFrontEnd;	
	}
	
	@DeleteMapping(value="eliminar/{id}")
	private Marca eliminar(@PathVariable("id") Long id) {
		Marca marca= repositorio.findById(id);
		if (marca!=null) {
			repositorio.delete(marca);
		}
		return marca;
	}
}
