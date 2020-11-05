package com.tester.jvm.mock.dal.repository;


import com.tester.jvm.mock.common.exception.BizException;
import com.tester.jvm.mock.dal.model.ModuleConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * {@link ModuleConfigRepository}
 * <p>
 *
 * @author fusheng.chu
 */
@Repository
@Transactional(rollbackFor = {RuntimeException.class, Error.class, BizException.class})
public interface ModuleConfigRepository extends JpaRepository<ModuleConfig, Long>, JpaSpecificationExecutor<ModuleConfig> {

    ModuleConfig findByAppNameAndEnvironment(String appName, String environment);
}
