package com.api.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.api.formulario.model.Marca;

@Repository
public interface MarcaRepository extends CrudRepository<Marca, Integer>, JpaRepository<Marca, Integer>{
		
	Marca findById(Long id);
}
