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


import com.api.formulario.model.Pais;
import com.api.formulario.repository.PaisRepository;

@RestController
@RequestMapping("pais")
public class PaisController {
	@Autowired(required=true)
	private PaisRepository repositorio;
	
	@GetMapping(value="listar")
	private List<Pais> listar(){
		return  repositorio.findAll();
	}
	
	@PostMapping(value="crear")
	private Pais crear(@RequestBody Pais paisFrontEnd) {
		Pais pais = new Pais();
		pais.setNombre(paisFrontEnd.getNombre());
		pais.setContinente(paisFrontEnd.getContinente());
		repositorio.save(pais);
		return pais;
	}
	
	@PutMapping(value="modificar")
	private Pais modificar(@RequestBody Pais paisFrontEnd) {
		Pais pais = repositorio.findById(paisFrontEnd.getId());
		if (pais!=null) {
			pais.setNombre(paisFrontEnd.getNombre());
			pais.setContinente(paisFrontEnd.getContinente());
			repositorio.save(pais);
			return pais;	
		}else return paisFrontEnd;	
	}
	
	@DeleteMapping(value="eliminar/{id}")
	private Pais eliminar(@PathVariable("id") Long id) {
		Pais pais = repositorio.findById(id);
		if (pais!=null) {
			repositorio.delete(pais);
		}
		return pais;
	}
}
