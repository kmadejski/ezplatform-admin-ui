<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageObject;

use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\AdminList;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\ElementFactory;
use PHPUnit\Framework\Assert;

class LanguagePage extends Page
{
    /** @var string Name by which Page is recognised */
    public const PAGE_NAME = 'Language';
    /** @var string $languageName */
    private $languageName;

    /**
     * @var \EzSystems\EzPlatformAdminUi\Behat\PageElement\AdminList
     */
    public $adminList;

    public function __construct(UtilityContext $context, string $languageName)
    {
        parent::__construct($context);
        $this->adminList = ElementFactory::createElement($this->context, AdminList::ELEMENT_NAME, self::PAGE_NAME . ' information');
        $this->languageName = $languageName;
        $this->route = '/admin/language/view';
        $this->pageTitle = sprintf('Language "%s"', $languageName);
    }

    public function verifyElements(): void
    {
        $this->adminList->verifyVisibility();
    }

    public function verifyItemAttribute(string $label, string $value): void
    {
        Assert::assertEquals(
            $value,
            $this->adminList->getCellValueFromSimpleTable($label),
            sprintf('Attribute "%s" has wrong value.', $label)
        );
    }
}
