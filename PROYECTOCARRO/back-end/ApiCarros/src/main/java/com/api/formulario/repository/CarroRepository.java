package com.api.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.formulario.model.Carro;

@Repository
public interface CarroRepository extends CrudRepository<Carro, Integer>, JpaRepository<Carro, Integer>{

	Carro findById(Long id);
}
